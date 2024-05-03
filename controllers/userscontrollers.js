const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser=asyncHandler(async (req,res) => {
    const {username,password}=req.body;
    if(!username || !password){
        res.status(400);
        throw new Error('Please Fill all the fields');
    }  
    const useravailable=await User.findOne({username});
    if(useravailable){
        res.status(400);
        throw new Error('User already exists');
    }
    //hash password
    const hashedPassword=await bcrypt.hash(password,10);
    console.log(hashedPassword);
    const user=await User.create({
        username,
        password:hashedPassword,
    });

    console.log(user);
    if(user){
        res.status(201).json({_id:user._id,username:user.username});
    }else{
        res.status(400);
        throw new Error('Invalid user data');
    }
});
// @desc    Login user
// @route   POST /api/users/login
// @access  Public
const loginUser=asyncHandler(async (req,res) => {
    const {username,password}=req.body;
    if(!username || !password){
        res.status(400);
        throw new Error('Please Fill all the fields');
    }
    const user = await User.findOne({username});
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    id: user.id
                },
            },
            process.env.ACCESS_TOKEN_SECERT,
            {expiresIn :"1h"}
        );
        res.status(200).json({accessToken})
    }else{
        res.status(401);
        throw new Error("email and password not valid")
    }
});
//@desc Current user info
//@route POST /api/users/current
//@access private
const currentUser=asyncHandler(async(req,res)=>{
    res.json(req.user);
})
module.exports={registerUser,loginUser,currentUser};