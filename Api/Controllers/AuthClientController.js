const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Client=require('../Models/Client')

//@desc POST register
//@route /api/v1/clientAuth/register
//@access private
const register = asyncHandler(async (req, res) => {
  const {
    nom,
    prenom,
    genre,
    email,
    date_naissance,
    tel,
    adress,
    ville,
    nationalite,
    password,
  } = req.body;
  if (
    !nom ||
    !prenom ||
    !genre ||
    !email ||
    !date_naissance ||
    !tel ||
    !adress ||
    !ville ||
    !nationalite ||
    !password
  ) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const clientExist=await Client.findOne({email})
  if(clientExist){
    res.status(400)
    throw new Error('Oops!! Client Already exist')
  }
  
   //Hash password
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(password, salt);
});
module.exports = {
  register,
};