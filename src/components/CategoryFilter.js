import React from "react";

function CategoryFilter({ categories, currentCategory, setCurrentCategory }) {

  function handleCategoryChange(event) {
    setCurrentCategory(event.target.value)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return <button key={category} value={category} className={currentCategory === category ? 'selected' : ''} onClick={handleCategoryChange}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;