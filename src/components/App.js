import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [showTasks, setShowTasks] = useState(TASKS)
  const [currentCategory, setCurrentCategory] = useState('All')

  function handleCategoryChange(event) {
    setCurrentCategory(event.target.value)
  }

  function handleDelete(event) {
    setShowTasks(tasks => {
      return tasks.filter(task => task.text !== event.target.value)
    })
  }

  function onTaskFormSubmit(newItem) {
    setShowTasks(tasks => [...tasks, newItem])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} currentCategory={currentCategory} handleCategoryChange={handleCategoryChange}  />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={showTasks} currentCategory={currentCategory} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
