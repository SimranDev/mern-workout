require("dotenv").config();

const express = require("express");

const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the backend",
  });
});

//listening for requests
app.listen(process.env.PORT, () => {
  console.log(`*** Server is running on port ${process.env.PORT} ***`);
});
