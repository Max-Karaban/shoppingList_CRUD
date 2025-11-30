const mongoose = require("mongoose");

const ShoppingListSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ownerId: { type: String, required: true },
  items: [{ type: String }],
  members: [{ type: String }],
});

module.exports = mongoose.model("ShoppingList", ShoppingListSchema);
