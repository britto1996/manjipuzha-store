const User = require("../models/user");
const asyncHandler = require("express-async-handler");

exports.authUser = asyncHandler(async (req, res) => {});

exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
});

exports.getUserProfile = asyncHandler(async (req, res) => {});

exports.updateUserProfile = asyncHandler(async (req, res) => {});

exports.getUsers = asyncHandler(async (req, res) => {});

exports.deleteUser = asyncHandler(async (req, res) => {});

exports.getUserById = asyncHandler(async (req, res) => {});

exports.updateUser = asyncHandler(async (req, res) => {});
