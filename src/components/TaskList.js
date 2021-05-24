import React from "react";
import Task from "./Task";

function TaskList({tasks,deleteTask}) {
  const TaskList = tasks.map((task) => (
    <Task
        key={task.text}
        text={task.text}
        category={task.category}
        deleteTask={deleteTask}
        />
  ));
  return (
    <div className="tasks">
      {taskList}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;