const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/taskdb", {
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("DB Error:", err));

// Routes
app.use("/api/tasks", require("./routes/taskRoutes"));

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});