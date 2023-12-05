import React, { useState } from 'react';
import { data } from './data';

const MealSelector = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div>
        <label>
          Select Category:
          <select onChange={(e) => handleCategoryChange(e.target.value)}>
            <option value="">All</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </label>
      </div>

      <div>
        <h2>{selectedCategory ? `${selectedCategory} Menu` : 'All Meals'}</h2>
        <ul>
          {data
            .filter((item) => !selectedCategory || item.category === selectedCategory)
            .map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
                <div>
                  <strong>{item.name}</strong>
                  <p>Price: ${item.price.toFixed(2)}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MealSelector;
