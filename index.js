require("dotenv").config();
const express = require("express");
const { startScheduler } = require("./scheduler/sender");

const app = express();
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Email Sender Service Running");
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
  startScheduler();
});
