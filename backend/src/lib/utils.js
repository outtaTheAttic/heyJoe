import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";


export const transporter = nodemailer.createTransport({
  host: "mail.smtp2go.com",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: "becomingeveryone.com",
    pass: "KvE47mFifoOGnoXG",
  },
});

export const generateToken = (userId, res) => {

	const token = jwt.sign(
		{ userId }, 
		process.env.JWT_SECRET,
		{ expiresIn: "7d" }
	);

	res.cookie("jwt", token, { maxAge: 7*24*60*60*1000, httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "development" ? false : true });

	return token;
		

};

