import { useEffect, useState } from "react";
import WorkoutDetailCard from "../components/WorkoutDetailCard";
import WorkoutForm from "../components/WorkoutForm";
import { Workout } from "../types/types";

const Home = () => {
  const [workouts, setWorkouts] = useState<Workout[]>();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/api/workouts`
      );
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setWorkouts(data);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="mt-8 flex space-x-4">
      <div className="grid gap-4 w-full">
        {workouts &&
          workouts.map(({ _id, title, reps, load, updatedAt }) => (
            <WorkoutDetailCard
              title={title}
              reps={reps}
              load={load}
              timeStamp={updatedAt}
              key={_id}
            />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
