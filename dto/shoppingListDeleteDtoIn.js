const { body } = require("express-validator");

module.exports = [
  body("id")
    .notEmpty().withMessage("id is required")
    .isString().withMessage("id must be a string")
];
