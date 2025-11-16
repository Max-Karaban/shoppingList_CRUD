const express = require("express");
const router = express.Router();

const memberController = require("../controllers/memberController");
const validateDto = require("../middleware/validateDto");
const checkAuth = require("../middleware/checkAuth");

const memberRemoveDtoIn = require("../dto/memberRemoveDtoIn");

router.post(
  "/remove",
  checkAuth("Owner"),
  ...memberRemoveDtoIn,
  validateDto,
  memberController.remove
);

module.exports = router;
