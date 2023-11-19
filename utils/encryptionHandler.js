const bcrypt = require('bcrypt');
const saltRounds = 10; 

// Function to hash a password
const hashPassword = async (password) => {
  try {
    // Hash the password using the salt
    const hash = await bcrypt.hash(password, saltRounds);

    return hash;
  } catch (error) {
    throw error;
  }
};

// Function to compare a password with its hash
const comparePassword = async (password, hash) => {
  try {
    // Compare the password with the hash
    const match = await bcrypt.compare(password, hash);

    return match;
  } catch (error) {
    throw error;
  }
};


module.exports = {hashPassword,comparePassword}