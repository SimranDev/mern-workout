require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

const app = express();

app.use(cors());
//middleware
//express.json parses the incoming request with JSON payloads
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

//connect to mongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`*** Server is running on port ${process.env.PORT} ***`);
    });
  })
  .catch((err) => {
    console.log("Error:", err.message);
  });
