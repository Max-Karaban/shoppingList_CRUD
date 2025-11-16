const { body } = require("express-validator");

module.exports = [
  body("itemId")
    .notEmpty().withMessage("itemId is required")
    .isString().withMessage("itemId must be a string"),
];
