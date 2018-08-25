// Dependencies --------------------------------------------------------------
// Regular "bcrypt" can cause errors for Windows users. Use "bcrypt-nodejs".
const bcrypt = require("bcrypt-nodejs");

// Sequelize Model for User --------------------------------------------------
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Using .prototype on the "User" object to add a method, checks if password matches hashed password.
  // DO NOT USE ES6 SYNTAX ON bcrypt - 'this' does not work the same in arrow functions
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // .hook() is a sequelize method that runs before creation of this instance of "User" in the database
  // Password is hashed/salted before being entered into database
  // This is a best practice for protecting user data

  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  return User;
};
