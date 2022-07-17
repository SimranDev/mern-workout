import { createContext, ReactNode, useReducer } from "react";
import { Workout } from "../types/types";

export const WorkoutContext = createContext<{
  workouts: Workout[];
  dispatch: React.Dispatch<any>;
} | null>(null);

const workoutsReducer = (state: { workouts: Workout[] }, action: any) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return { workouts: action.payload };
    case "CREATE_WORKOUT":
      return { workouts: [action.payload, ...state.workouts] };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

type Props = {
  children: ReactNode;
};

export const WorkoutContextProvider = ({ children }: Props) => {
  const initalState: Workout[] | null = null;
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: initalState,
  });

  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};
