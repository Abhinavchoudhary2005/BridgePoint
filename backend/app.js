require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { checkForAuth } = require("./middleware/auth");
const user = require("./routes/user")

// PORT
const PORT = process.env.PORT || 8000;

// SERVER
const app = express();

// CONNECTING MONGODB SERVER
mongoose
  .connect(process.env.MONGODB_URL, {
    serverSelectionTimeoutMS: 60000,
    family: 4, // Use IPv4
  })
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(checkForAuth);

// ROUTES
app.use("/user", user)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// START THE SERVER
const server = app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT} ...`);
});
