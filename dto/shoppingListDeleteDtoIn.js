const { body } = require("express-validator");

module.exports = [
  body("id")
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("Invalid Mongo ID"),
];
