import { Task } from "./Task";

export function TasksList({ tasks, selectedTask, onSelected }) {
  return (
    <ul>
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
