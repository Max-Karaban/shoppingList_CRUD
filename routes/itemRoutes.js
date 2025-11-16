const express = require("express");
const router = express.Router();

const itemController = require("../controllers/itemController");
const validateDto = require("../middleware/validateDto");
const checkAuth = require("../middleware/checkAuth");

const itemAddDtoIn = require("../dto/itemAddDtoIn");
const itemDeleteDtoIn = require("../dto/itemDeleteDtoIn");
const itemMarkCompletedDtoIn = require("../dto/itemMarkCompletedDtoIn");
const itemUnmarkDtoIn = require("../dto/itemUnmarkDtoIn");


router.post(
  "/add",
  checkAuth(["Owner", "Member"]),
  ...itemAddDtoIn,
  validateDto,
  itemController.add
);

router.post(
  "/delete",
  checkAuth(["Owner", "Member"]),
  ...itemDeleteDtoIn,
  validateDto,
  itemController.delete
);


router.post(
  "/markCompleted",
  checkAuth(["Owner", "Member"]),
  ...itemMarkCompletedDtoIn,
  validateDto,
  itemController.markCompleted
);

module.exports = router;

router.post(
  "/unmark",
  checkAuth(["Owner", "Member"]),
  ...itemUnmarkDtoIn,
  validateDto,
  itemController.unmark
);
