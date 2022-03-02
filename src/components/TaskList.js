import React, { useState } from "react";
import Task from "./Task"

function TaskList({ tasks }) {
  const [renderTasks, setRenderTasks] = useState(tasks)

  function handleSetRenderTasks(removedItem) {
    setRenderTasks(tasks => {
      return tasks.filter(task => task.text !== removedItem.textContent)
    })
  }

  return (
    <div className="tasks">
      {renderTasks.map((item, index) => (
          <Task key={index} text={item.text} category={item.category} handleSetRenderTasks={handleSetRenderTasks} />
        ))}
    </div>
  );
}

export default TaskList;
