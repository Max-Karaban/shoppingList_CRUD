const { query } = require("express-validator");

module.exports = [
  query("isArchived")
    .optional()
    .isBoolean().withMessage("isArchived must be boolean")
];
