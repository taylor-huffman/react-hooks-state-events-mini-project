import React, { useState } from "react";

function CategoryFilter({ categories }) {
  const [isSelected, setIsSelected] = useState(false)

  function handleSetSelected() {
    setIsSelected(isSelected => !isSelected)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return <button key={category} className={isSelected ? 'selected' : ''} onClick={handleSetSelected}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
