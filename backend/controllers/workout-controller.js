const { default: mongoose } = require("mongoose");
const Workout = require("../models/workout-model");

//get all workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//get single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await Workout.findById(id);
    res.json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//create new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  const emptyFields = [];
  if (!title) {
    emptyFields.push("Title");
  }
  if (!reps) {
    emptyFields.push("Reps");
  }
  if (!load) {
    emptyFields.push("Load");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: `Missing ${emptyFields.join(", ")}`, emptyFields });
  }

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid workout Id!" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    res.status(400).json({ error: "No such workout to delete!" });
  }

  res.status(200).json(workout);
};

//update an existing workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
