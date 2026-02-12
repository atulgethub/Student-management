require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is working");
});

// MongoDB connect
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo Error:", err));

// Routes
app.use("/api/students", require("./routes/studentRoutes"));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
