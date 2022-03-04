import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {

  const [taskItems, setTaskItems] = useState(TASKS)
  const [currentCategory, setCurrentCategory] = useState('All')
  
  const filterTasks = taskItems.filter(task => {
    if (currentCategory === 'All') return true
    return task.category === currentCategory
  })

  function onTaskFormSubmit(newItem) {
    setTaskItems(tasks => [...tasks, newItem])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={filterTasks} setTaskItems={setTaskItems} currentCategory={currentCategory} />
    </div>
  );
}

export default App;