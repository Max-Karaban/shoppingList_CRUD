const { body } = require("express-validator");

module.exports = [
  body("title")
    .notEmpty().withMessage("title is required")
    .isLength({ max: 100 }).withMessage("title must be under 100 characters"),
  
  body("isArchived")
    .optional()
    .isBoolean().withMessage("isArchived must be boolean")
];
