import express from "express";

const router = express.Router();

router.get("/", (req,res) => {
 res.send("Hello, welcome to the website!\nThanks for coming!");
})

router.get("/signup", (req,res) => {
 res.send("Signup endpoint");
})

router.get("/login", (req,res) => {
 res.send("Login endpoint");
})

router.get("/logout", (req,res) => {
 res.send("Logout endpoint");
})

export default router;
