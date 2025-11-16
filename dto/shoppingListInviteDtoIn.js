const { body } = require("express-validator");

module.exports = [
  body("listId")
    .notEmpty().withMessage("listId is required")
    .isString().withMessage("listId must be a string"),
  
  body("userEmail")
    .notEmpty().withMessage("userEmail is required")
    .isEmail().withMessage("userEmail must be a valid email")
];
