import React, { useState } from 'react';
import Item from './item'; 
import itemsData from './items.json'; 

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");
  const [items, setItems] = useState(itemsData);


  const handleSort = () => {
    if (sortBy === "name") {
      setItems([...items].sort((a, b) => a.name.localeCompare(b.name)));
    } else if (sortBy === "category") {
      setItems([...items].sort((a, b) => a.category.localeCompare(b.category)));
    }
  };

  React.useEffect(() => {
    handleSort();
  }, [sortBy]);

  return (
    <div>
      <button 
        onClick={() => setSortBy("name")} 
        style={{ backgroundColor: sortBy === "name" ? "lightblue" : "white" }}
      >
        Sort by Name
      </button>
      <button 
        onClick={() => setSortBy("category")} 
        style={{ backgroundColor: sortBy === "category" ? "lightblue" : "white" }}
      >
        Sort by Category
      </button>
      <ul>
        {items.map(item => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
