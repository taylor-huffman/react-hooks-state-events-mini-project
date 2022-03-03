import React from "react";

function CategoryFilter({ categories, currentCategory, handleCategoryChange }) {
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
