// Express.js is a framework for handling HTTP requests.
// We use it to create an API router.
//it maps API endpoints to these functions(register and login in controllers)


import express from "express";
import { register } from "../controllers/user.controller.js";
import { login } from "../controllers/user.controller.js";

//express.Router() creates a mini Express application that we can use to define routes.
//Helps keep routes organized and modular.
const router=express.Router();
router.route("/register").post(register);
router.route("/login").post(login);

export default router;

