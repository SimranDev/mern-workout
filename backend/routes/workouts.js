const express = require("express");
const {
  createWorkout,
  getSingleWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workout-controller");
const router = express.Router();

//GET all workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getSingleWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", deleteWorkout);

//PATCH an existing workout
router.patch("/:id", updateWorkout);

module.exports = router;
