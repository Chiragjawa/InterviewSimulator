import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["instructor","student"],
        default:'student'        
    },

//     Stores an array of MongoDB ObjectIds.
// type: mongoose.Schema.Types.ObjectId → Each entry is a reference to another document.
// ref: "Course" → Links each course to the Course model.
  
enrolledCourses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Course'
        }

    ],
    photoUrl:{
        type:String,
        default:""
    }
},{timestamps:true});

// Automatically adds two fields to each document:
// createdAt → Stores the date/time the user was created.
// updatedAt → Stores the date/time the user was last updated.


export const User=mongoose.model("User",userSchema);
//it is a named export hence it requires curly bracket while importing.

// mongoose.model("User", userSchema);	Creates the User model based on userSchema.
// MongoDB Collection	Mongoose automatically creates a collection named users.
//This creates the User model, which connects to the users collection in MongoDB.

//define schema---> create model---> perform operations.



// A Schema (userSchema) is just a blueprint → it defines the structure of a document.
// A Model (User) is the actual object that allows database operations.
// If you need to reuse a schema in multiple models, export only the schema.
// If you just need to interact with the database, export the model directly.