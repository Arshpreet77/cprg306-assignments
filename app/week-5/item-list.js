"use client";
import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

function ItemList() {
  const [sortingCriteria, setSortingCriteria] = useState('name');

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortingCriteria === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortingCriteria === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const displaySortingButtons = () => {
    return (
      <div>
        <button
          onClick={() => setSortingCriteria('name')}
          style={{ backgroundColor: sortingCriteria === 'name' ? 'lightblue' : 'white' }}
        >
          Arrange by Name
        </button>
        <button
          onClick={() => setSortingCriteria('category')}
          style={{ backgroundColor: sortingCriteria === 'category' ? 'lightblue' : 'white' }}
        >
          Arrange by Category
        </button>
      </div>
    );
  };

  const displayItems = () => {
    return sortedItems.map(item => (
      <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
    ));
  };

  return (
    <div>
      {displaySortingButtons()}
      <ul>
        {displayItems()}
      </ul>
    </div>
  );
}

export default ItemList;
