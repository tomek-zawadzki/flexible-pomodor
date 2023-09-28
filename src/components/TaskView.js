import { useContext } from "react";
import { TasksContext } from "./AppLayout";
import { Task } from "./Task";

function TaskView({ selectedTask, onSelected }) {
  const { tasks } = useContext(TasksContext);

  return (
    <div className="mt-6 h-[600px] w-[30%] border">
      {selectedTask &&
        tasks
          .filter((task) => task.id === selectedTask.id)
          .map((task) => (
            <Task
              task={task}
              key={task.id}
              selectedTask={selectedTask}
              onSelected={onSelected}
            />
          ))}
    </div>
  );
}

export default TaskView;
