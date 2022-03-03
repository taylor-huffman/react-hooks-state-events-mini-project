import React from "react";
import Task from "./Task"

function TaskList({ tasks, currentCategory, handleDelete }) {

  const taskDisplay = tasks.filter(task => {
    if (currentCategory === 'All') return true
    return task.category === currentCategory
    }).map(task => {
      return <Task key={task.text} text={task.text} category={task.category} handleDelete={handleDelete} />
    })

    
  return (
    <div className="tasks">
      {taskDisplay}
    </div>
  );
}


export default TaskList;
