import { useEffect } from "react";
import WorkoutDetailCard from "../components/WorkoutDetailCard";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/api/workouts`
      );
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: data });
      }
    };
    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="grid mt-8 sm:flex sm:space-x-8">
      <div className="grid w-full gap-4 h-max">
        {workouts &&
          workouts.map(({ _id, title, reps, load, updatedAt }) => (
            <WorkoutDetailCard
              id={_id}
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
