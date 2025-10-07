require("dotenv").config();
const app = require("./src/app");
const sequelize = require("./src/config/database.js");
const Product = require("./src/models/product.js");


const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected");

    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error("Database connection error:", err);
  }
})();
