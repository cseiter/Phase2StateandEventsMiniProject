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
    </div>
  )
  ;
}

export default TaskList;