import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const workout = { title, load, reps };
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/api/workouts`,
      {
        method: "POST",
        body: JSON.stringify(workout),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
      setEmptyFields(data.emptyFields);
    }
    if (res.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      setEmptyFields([]);
      console.log("new workout added!");
      dispatch({ type: "CREATE_WORKOUT", payload: data });
    }
  };

  return (
    <form
      className="sticky grid gap-4 p-4 rounded-lg sm:w-96 workout-form h-min top-4"
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg font-bold text-gray-700">Add a new workout</h3>

      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={`border ${
            emptyFields.includes("Title") ? "border-red-400" : ""
          }`}
        />
      </div>

      <div>
        <label htmlFor="load">Load (in kg):</label>
        <input
          type="number"
          id="load"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
          className={`border ${
            emptyFields.includes("Load") ? "border-red-400" : ""
          }`}
        />
      </div>
      <div>
        <label htmlFor="reps">Reps:</label>
        <input
          type="number"
          id="reps"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
          className={`border ${
            emptyFields.includes("Reps") ? "border-red-400" : ""
          }`}
        />
      </div>
      <button className="px-2 py-1 mt-2 text-white transition-colors bg-green-600 rounded w-max hover:bg-green-500">
        Add Workout
      </button>
      {error && (
        <div className="p-2 text-xs font-semibold text-gray-700 bg-red-200 rounded">
          {error}
        </div>
      )}
    </form>
  );
};

export default WorkoutForm;
