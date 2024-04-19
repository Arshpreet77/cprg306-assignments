"use client"

import { useState } from 'react';

import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

export default function Page() {

  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main >
      <h1 className="text-4xl font-semibold mb-6 border-b-2 border-gray-500">Shopping list</h1>
      <NewItem addItem={handleAddItem} />
      <ItemList items={items}/>
    </main>
  );
}
