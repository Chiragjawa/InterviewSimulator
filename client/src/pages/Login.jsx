import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authApi";

// Loader2 → A loading spinner for UI feedback.
// toast → Displays success/error notifications.
import { Loader2, Mail, Lock, User, Eye, EyeOff, Sparkles } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleRegistration = async (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    const action = type === "signup" ? registerUser : loginUser;
    await action(inputData);
  };

  useEffect(() => {
    if (registerIsSuccess && registerData) {
      toast.success(registerData.message || "Signup successful.");
    }
    if (registerError) {
      toast.error(registerError?.data?.message || "Signup Failed");
    }
    if (loginIsSuccess && loginData) {
      toast.success(loginData.message || "Login successful.");
    }
    if (loginError) {
      toast.error(loginError?.data?.message || "Login Failed");
    }
  }, [
    loginIsLoading,
    registerIsLoading,
    loginData,
    registerData,
    loginError,
    registerError,
  ]);

  return (
    <div className="min-h-screen flex bg-gray-900">
      {/* Left Half - Image Section */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
        <div className="relative z-10 flex items-center justify-center w-full h-full p-12">
          <div className="text-center text-white">
            <div className="mb-8">
              <Sparkles className="w-16 h-16 mx-auto mb-4 text-purple-400" />
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Welcome to PrepWise
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Your Gateway to Learning Excellence
              </p>
            </div>
            
            {/* Decorative Elements */}
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-200"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl mb-2">📚</div>
                  <div className="text-sm text-gray-300">Study</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="text-sm text-gray-300">Learn</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="text-sm text-gray-300">Grow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Right Half - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-400">
              Sign in to your account or create a new one
            </p>
          </div>

          <Tabs defaultValue="Login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-800 p-1 rounded-xl border border-gray-700">
              <TabsTrigger 
                value="Login" 
                className="data-[state=active]:bg-gray-700 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-lg transition-all duration-200 text-gray-400"
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger 
                value="SignUp" 
                className="data-[state=active]:bg-gray-700 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-lg transition-all duration-200 text-gray-400"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="SignUp" className="mt-6">
              <Card className="border-gray-700 bg-gray-800/50 backdrop-blur-sm shadow-2xl">
                <CardHeader className="space-y-1 pb-4">
                  <CardTitle className="text-2xl font-semibold text-white">Create Account</CardTitle>
                  <CardDescription className="text-gray-400">
                    Join us and start your journey today
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                      <Input
                        type="text"
                        name="name"
                        value={signupInput.name}
                        onChange={(e) => changeInputHandler(e, "signup")}
                        placeholder="Enter your full name"
                        className="pl-10 h-12 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                      <Input
                        type="email"
                        name="email"
                        value={signupInput.email}
                        onChange={(e) => changeInputHandler(e, "signup")}
                        placeholder="Enter your email"
                        className="pl-10 h-12 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-300">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                      <Input
                        type={showSignupPassword ? "text" : "password"}
                        name="password"
                        value={signupInput.password}
                        onChange={(e) => changeInputHandler(e, "signup")}
                        placeholder="Create a strong password"
                        className="pl-10 pr-10 h-12 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
                        required={true}
                      />
                      <button
                        type="button"
                        onClick={() => setShowSignupPassword(!showSignupPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                      >
                        {showSignupPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => handleRegistration("signup")}
                    disabled={registerIsLoading}
                    className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    {registerIsLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating Account...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="Login" className="mt-6">
              <Card className="border-gray-700 bg-gray-800/50 backdrop-blur-sm shadow-2xl">
                <CardHeader className="space-y-1 pb-4">
                  <CardTitle className="text-2xl font-semibold text-white">Welcome Back</CardTitle>
                  <CardDescription className="text-gray-400">
                    Sign in to your account to continue
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                      <Input
                        type="email"
                        name="email"
                        value={loginInput.email}
                        onChange={(e) => changeInputHandler(e, "login")}
                        placeholder="Enter your email"
                        className="pl-10 h-12 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-300">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                      <Input
                        type={showLoginPassword ? "text" : "password"}
                        name="password"
                        value={loginInput.password}
                        onChange={(e) => changeInputHandler(e, "login")}
                        placeholder="Enter your password"
                        className="pl-10 pr-10 h-12 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
                        required={true}
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                      >
                        {showLoginPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    disabled={loginIsLoading}
                    onClick={() => handleRegistration("login")}
                    className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    {loginIsLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing In...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;