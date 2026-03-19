import express from "express";
import dotenv from "dotenv";
import sequelize from "../backend/config/db.js"; // Adjust path if needed
import cors from "cors";
import router from "./api/book/bookRoutes.js";
import userRouter from "./api/user/user_Routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());

app.use("/all-book", router);
app.use("/user", userRouter);

// ✅ Arrow function to test DB connection and sync models
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connection established successfully.");

    await sequelize.sync(); // or { force: true } for dev reset
    console.log("📦 All models synced successfully.");

    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("❌ Startup failed:", error.message);
  }
};

// ✅ Call the function
startServer();
