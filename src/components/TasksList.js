import { Task } from "./Task";

export function TasksList({ tasks, selectedTask, onSelected }) {
  return (
    <ul className="grid grid-cols-3 gap-2">
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          selectedTask={selectedTask}
          onSelected={onSelected}
        />
      ))}
    </ul>
  );
}
