const Workout = require("../models/workout-model");

//get all workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await Workout.findById(id);
    res.json(workout);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//create new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//delete a workout

//update an existing workout

module.exports = { getWorkouts, getSingleWorkout, createWorkout };
