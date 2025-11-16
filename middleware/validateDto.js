const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  const errors = validationResult(req);
  const uuAppErrorMap = {};

  if (!errors.isEmpty()) {
    uuAppErrorMap["shoppingList/create/invalidDtoIn"] = {
      message: "Invalid dtoIn",
      details: errors.array()
    };
    return res.status(400).json({ uuAppErrorMap });
  }

  next();
};
