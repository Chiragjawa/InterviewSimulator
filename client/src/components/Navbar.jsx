import { Menu, Sparkles } from "lucide-react";
import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu.jsx";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import DarkMode from "@/DarkMode";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "@radix-ui/react-dropdown-menu";

const Navbar = () => {
  const user = true;
  const role = "instructor";

  return (
    <div className="h-16 bg-gray-900 border-b border-gray-800 fixed top-0 left-0 right-0 duration-300 z-10 backdrop-blur-sm bg-gray-900/95">
      {/* Desktop */}
      <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full px-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h1 className="hidden md:block font-bold text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            PrepWise
          </h1>
        </div>
        
        {/* User icons and dark mode icon  */}
        <div className="flex items-center gap-6">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="border-2 border-gray-700 hover:border-purple-500 transition-colors cursor-pointer">
                  <AvatarImage
                    src={user?.photoUrl || "https://github.com/shadcn.png"}
                    alt="@shadcn"
                  />
                  <AvatarFallback className="bg-gray-700 text-white">CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-gray-800 border-gray-700">
                <DropdownMenuLabel className="text-gray-300">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-700" />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 focus:bg-gray-700">
                    <span>My Learning</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 focus:bg-gray-700">
                    <span>Edit Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 focus:bg-gray-700">
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                {role === "instructor" && (
                  <>
                    <DropdownMenuSeparator className="bg-gray-700" />
                    <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 focus:bg-gray-700">
                      <span>Dashboard</span>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Login
              </Button>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                onClick={() => navigate("/login")}
              >
                Signup
              </Button>
            </div>
          )}
          <DarkMode />
        </div>
      </div>
      
      {/* Mobile device  */}
      <div className="flex md:hidden items-center justify-between px-4 h-full">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h1 className="font-bold text-xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            PrepWise
          </h1>
        </div>
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = () => {
  const role = "instructor";
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="rounded-full hover:bg-gray-700 border-gray-600 text-gray-300"
          variant="outline"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-gray-900 border-gray-800">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle className="text-white">
            <span>PrepWise</span>
          </SheetTitle>
          <DarkMode />
        </SheetHeader>
        <Separator className="mr-2 bg-gray-700" />
        <nav className="flex flex-col space-y-4 mt-6">
          <span className="text-gray-300 hover:text-white cursor-pointer transition-colors">
            My Learning
          </span>
          <span className="text-gray-300 hover:text-white cursor-pointer transition-colors">
            Edit Profile
          </span>
          <span className="text-gray-300 hover:text-white cursor-pointer transition-colors">
            Log out
          </span>
        </nav>
        {role === "instructor" && (
          <SheetFooter className="mt-auto">
            <SheetClose asChild>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                onClick={() => navigate("/admin/dashboard")}
              >
                Dashboard
              </Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};