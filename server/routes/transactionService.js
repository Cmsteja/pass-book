// services/userService.js

const User = require('../models/transactions');

// Function to create a new user
async function createUser(userData) {
  try {
    const newUser = new User(userData);
    await newUser.save();
    return newUser;
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
}

// Function to get all users
async function getUsers() {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(`Error getting users: ${error.message}`);
  }
}

// Function to get a user by ID
async function getUserById(userId) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error(`Error getting user: ${error.message}`);
  }
}

// Function to update a user by ID
async function updateUser(userId, newData) {
  try {
    const user = await User.findByIdAndUpdate(userId, newData, { new: true });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error(`Error updating user: ${error.message}`);
  }
}

// Function to delete a user by ID
async function deleteUser(userId) {
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};
