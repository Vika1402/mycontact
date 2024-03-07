const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password, userName } = req.body; // Add userName here
    if (!username || !email || !password || !userName) { // Check for userName
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered!");
    }

    const hashpass = await bcrypt.hash(password, 10);
    console.log(`hashed password is: `, hashpass);

    const user = await User.create({ username, email, password: hashpass, userName }); // Include userName here
    console.log("User created ", user);
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400);
        throw new Error("Email or password is not valid.");
    }
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields mandatory!");
    }

    const user = await User.findOne({ email });

    // Compare password with hashed password 
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        }, process.env.ACCESS_TOKEN,{expiresIn:"15m"});

        res.status(200).json({ accessToken});
    } else {
        res.status(401);
        throw new Error("Email or password is not valid.");
    }
});

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
