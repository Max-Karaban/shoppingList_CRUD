const { body } = require("express-validator");

module.exports = [
  body("listId")
    .notEmpty().withMessage("listId is required")
    .isString().withMessage("listId must be a string"),

  body("name")
    .notEmpty().withMessage("name is required")
    .isLength({ max: 100 }).withMessage("name must be under 100 characters")
];
