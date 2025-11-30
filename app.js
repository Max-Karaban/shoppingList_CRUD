
const express = require("express");
const cors = require("cors");

const shoppingListRoutes = require("./routes/shoppingListRoutes");
const itemRoutes = require("./routes/itemRoutes");
const memberRoutes = require("./routes/memberRoutes");

const connectDB = require("./config/db");
connectDB();


const app = express();
app.use(cors());
app.use(express.json());

// Connecting routes
app.use("/shoppingList", shoppingListRoutes);
app.use("/item", itemRoutes);
app.use("/member", memberRoutes);

// Starting the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
