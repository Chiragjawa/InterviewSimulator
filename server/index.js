import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
//cookieParser → Middleware to handle cookies in requests.
//cors → Allows cross-origin requests (Frontend & Backend communicate safely).
import cookieParser from "cookie-parser";
import cors from "cors";


//Loads the .env file and sets up environment variables
dotenv.config({});

//establish a connection with mongoDB database
connectDB();


//Creates an Express app instance.
//app handles everything (routes, requests, responses, middleware).
const app=express();
const PORT= process.env.PORT || 3000;

//default middleware
app.use(express.json()); //parses the incoming data json
app.use(cookieParser()); //enables cookie handling
app.use(cors(
    {
       origin:"http://localhost:5174",
       credentials:true 
    }
));
//Frontend (Vite) runs on port 5173
//Backend (Express) runs on port 8080
//CORS allows the frontend to make requests to the backend
// Without CORS, the browser blocks cross-origin requests
//credentials: true → Allows cookies and authentication tokens to be sent.



//apis
app.use("/api/v1/user",userRoute);
//All requests starting with /api/v1/user are handled by userRoute (which includes /register and /login routes).

app.listen(PORT,()=>{
    console.log(`Server listen at port ${PORT}`);
 
})



     //ORDER
// Database (MongoDB) Setup → db.js
//  Model (Schema) → user.model.js
//  Authentication Logic → user.controller.js
//  Token Generation → generateToken.js
//  Routes (API Endpoints) → user.route.js
//  Main Server → server.js


//how things work
// 1️⃣ Frontend (Vite) sends a request to http://localhost:8080/api/v1/user/register.
// 2️⃣ The request is handled by Express middleware (app.use() in server.js).
// 3️⃣ The request is forwarded to user.route.js, which calls register from user.controller.js.
// 4️⃣ The controller:

// Validates input
// Hashes the password
// Creates a new user in MongoDB (User.create())
// Returns a success message.
// 5️⃣ The frontend receives the response & updates the UI.
