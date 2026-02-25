import { createWelcomeEmail } from "../../../frontend/index.js";
import { generateToken } from "../lib/utils.js";
import { transporter } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import fs from "fs";
import "dotenv/config";

const clientURL = process.env.CLIENT_URL;

export const signup = async (req,res) => {

	const {fullName, email, password} = req.body;

	try {
		
		if (!fullName || !email || ! password) {
			
			return res.status(400).json({message:"All fields are required"});

		}

		if (password.length < 6) {

                        return res.status(400).json({message:"Password must be at least 6 characters"});

                }

		// check if emailis valid: regex
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		
		if (!emailRegex.test(email)) {
			return res.status(400).json({ message: "Invalid email format" });
    		}

		// check if user already exists
		const user = await User.findOne({email});
		if (user) return res.status(400).json({message:"Email already exists"});

		// if user is new, hash i
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			fullName,
			email,
			password: hashedPassword
		});

		if(newUser) {

			generateToken(newUser._id, res);
			await newUser.save();

			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				email: newUser.email,
				profilePic: newUser.profilePic
			});

			// Send an email using async/await
			(async () => {
			  const info = await transporter.sendMail({
			    from: '"Becoming Everyone" <joe@becomingeveryone.com>',
			    to: newUser.email,
			    subject: "Hello ✔",
			    text: "Hello world?", // Plain-text version of the message
			    html: createWelcomeEmail(newUser.fullName,clientURL), // HTML version of the message
			  });

			  console.log("Message sent:", info.messageId);
			})();

		} else {

			res.status(400).json({message:"Invalid user data"});

		}


	} catch (error) {

		console.log("Error in signup controller:", error);
		res.status(500).json({ message:"Internal server error" });

	}
};

export const login = async (req,res) => {

	const {email, password} = req.body;

	try{

		const user = await User.findOne({email});
		if(!user) return res.status(400).json({ message:"Invalid credentials" });

		const isPasswordCorrect = await bcrypt.compare(password, user.password);
		if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

		generateToken(user._id,res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			email: user.email,
			profilePic: user.profilePic
		});

	} catch (error) {

		console.error("Error in login controller:", error);
		res.status(500).json({ message: "Internal server error" });
	}

}

export const logout = (_,res) => {

	res.cookie("jwt", "", { maxAge: 0 });
	res.status(200).json({ message: "Logged out successfully" });

}
