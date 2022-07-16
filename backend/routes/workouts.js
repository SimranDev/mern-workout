const express = require("express");
const {
  createWorkout,
  getSingleWorkout,
  getWorkouts,
} = require("../controllers/workout-controller");
const Workout = require("../models/workout-model");
const router = express.Router();

//GET all workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getSingleWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a workout" });
});

//PATCH an existing workout
router.patch("/:id", (req, res) => {
  res.json({ message: "PATCH an existing workout" });
});

module.exports = router;
