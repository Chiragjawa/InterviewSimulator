// bcryptjs → For password hashing.
// User → The User model to interact with the database.
// generateToken → A utility function to generate authentication tokens (for login).
import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";

export const register= async(req,res)=>{
    try {
        const{name,email,password}=req.body; //data sent from frontend
        if(!name || !email|| !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required."
            })
        }
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json({
                  success:false,
                  message:"User already exits with this email."
            })
        }
        const hashedPassword=await bcrypt.hash(password,10);
        //The 10 is the salt rounds (more rounds = stronger encryption but slower processing).


        //await User.create({ name: name, email: email, password: hashedPassword });
        //rest entries in the schema either fet default value or are set as null.
        //alternate way
        await User.create({
            name,
            email,
            password:hashedPassword
        });



        return res.status(201).json({
            success:true,
            message:"Account created successfully."
        })
        }

     catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to register"
        })
    }
    
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Incorrect email or password."
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: "Incorrect email or password."
            });
        }

        // Generate token and send success response
        generateToken(res, user, `Welcome back ${user.name}`);

        return res.status(200).json({
            success: true,
            message: `Welcome back ${user.name}`,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            }
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to login."
        });
    }
};
