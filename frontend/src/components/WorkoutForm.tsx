import { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

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
    const json = await res.json();

    if (!res.ok) {
      setError(json.error);
    }
    if (res.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("new workout added!");
    }
  };

  return (
    <form
      className="p-4 w-80 rounded-lg workout-form grid gap-4 h-min"
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg text-gray-700 font-bold">Add a new workout</h3>

      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>

      <div>
        <label htmlFor="load">Title:</label>
        <input
          type="number"
          id="load"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        />
      </div>
      <div>
        <label htmlFor="reps">Title:</label>
        <input
          type="number"
          id="reps"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />
      </div>
      <button>Add Workout</button>
      <div className="text-red-700">{error ?? "error"}</div>
    </form>
  );
};

export default WorkoutForm;
