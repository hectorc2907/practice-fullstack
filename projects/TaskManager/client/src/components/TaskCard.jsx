import { useTasks } from "../context/TasksContext";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <button>update</button>
          <button
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            delete
          </button>
        </div>
      </div>
      <p className="text-slate-300">{task.description}</p>
      <p>{new Date(task.date).toLocaleDateString()}</p>
    </div>
  );
}

export default TaskCard;
