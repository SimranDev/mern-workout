import { formatDistanceToNow } from "date-fns";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

type Props = {
  id: string;
  title: string;
  reps: number;
  load: number;
  timeStamp: string;
};

const WorkoutDetailCard = ({ id, title, reps, load, timeStamp }: Props) => {
  const { dispatch } = useWorkoutsContext();

  const handleDeleteWorkout = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/api/workouts/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();

    if (res.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: data });
    }
  };

  return (
    <div className="flex p-4 mx-4 rounded shadow sm:mx-0 bg-slate-100">
      <div className="grid w-full gap-1">
        <h2 className="mb-2 text-xl font-bold text-blue-600">{title}</h2>
        <div>
          <strong>Load(kg):</strong> {load}
        </div>
        <div>
          <strong>Reps:</strong> {reps}
        </div>
      </div>
      <div className="grid">
        <button
          onClick={handleDeleteWorkout}
          className="p-1 ml-auto text-gray-700 transition-colors rounded-full w-max h-max hover:bg-red-500 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
        <span className="mt-auto text-xs font-semibold text-gray-400 select-none w-max h-max">
          {formatDistanceToNow(new Date(timeStamp), { addSuffix: true })}
        </span>
      </div>
    </div>
  );
};

export default WorkoutDetailCard;
