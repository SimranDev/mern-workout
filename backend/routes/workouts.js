const express = require("express");
const Workout = require("../models/workout-model");
const router = express.Router();

//GET all workouts
router.get("/", (req, res) => {
  res.json({ message: "GET all workouts" });
});

//GET a single workout
router.get("/:id", (req, res) => {
  res.json({ message: "GET a single workout" });
});

//POST a new workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a workout" });
});

//PATCH an existing workout
router.patch("/:id", (req, res) => {
  res.json({ message: "PATCH an existing workout" });
});

module.exports = router;
