//This function generates a JWT (JSON Web Token) and stores it in a secure HTTP-only cookie. The purpose is to authenticate users and maintain their login session.
//It allows users to stay logged in without needing to re-enter credentials.
import jwt from "jsonwebtoken";

export const generateToken = (res, user, message) => {
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });

  return res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    }).json({
      success: true,
      message,
      //send the user here so that it can be used in frontend to update the state
      user
    });
};