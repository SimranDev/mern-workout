type Props = {
  title: string;
  reps: number;
  load: number;
  timeStamp: string;
};

const WorkoutDetailCard = ({ title, reps, load, timeStamp }: Props) => {
  return (
    <div className="rounded-lg shadow bg-slate-100 p-4 grid gap-1">
      <h2 className="text-xl font-bold text-purple-600 mb-2">{title}</h2>
      <div>
        <strong>Load(kg):</strong> {load}
      </div>
      <div>
        <strong>Reps:</strong> {reps}
      </div>
      <span>{timeStamp}</span>
    </div>
  );
};

export default WorkoutDetailCard;
