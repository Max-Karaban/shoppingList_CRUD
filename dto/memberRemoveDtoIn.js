const { body } = require("express-validator");

module.exports = [
  body("listId")
    .notEmpty().withMessage("listId is required")
    .isString().withMessage("listId must be a string"),

  body("userId")
    .notEmpty().withMessage("userId is required")
    .isString().withMessage("userId must be a string"),
];
