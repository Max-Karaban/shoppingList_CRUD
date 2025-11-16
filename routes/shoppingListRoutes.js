const express = require("express");
const router = express.Router();

const shoppingListController = require("../controllers/shoppingListController");
const createShoppingListDtoIn = require("../dto/shoppingListCreateDtoIn");
const checkAuth = require("../middleware/checkAuth");
const validateDto = require("../middleware/validateDto");

router.post(
  "/create",
  checkAuth("Owner"),
  createShoppingListDtoIn,
  validateDto,
  shoppingListController.create
);

router.post(
  "/delete",
  checkAuth("Owner"),
  require("../dto/shoppingListDeleteDtoIn"),
  validateDto,
  shoppingListController.delete
);

module.exports = router;

router.get(
  "/list",
  checkAuth(["Owner", "Member"]),
  require("../dto/shoppingListListDtoIn"),
  validateDto,
  shoppingListController.list
);

router.post(
  "/invite",
  checkAuth("Owner"),
  require("../dto/shoppingListInviteDtoIn"),
  validateDto,
  shoppingListController.invite
);
