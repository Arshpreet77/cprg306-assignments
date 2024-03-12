"Use client"
// @client

import React, { useState } from 'react';
import NewItem from './new-item'; 
import ItemList from './item-list';
import itemsData from './items.json';


const Page = () => {
    const [items, setItems] = useState(itemsData);

    const handleAdditionOfItem = (newItem) => {
        const newId = Date.now().toString();
        const itemWithId = { ...newItem, id: newId };
        setItems([...items, itemWithId]);
    };

    return (
        <main className="bg-gray-100 p-4">
            <h1 className="text-2xl font-bold text-black text-center mb-4">Shopping List</h1>
            <NewItem onAddItem={handleAdditionOfItem} />
            <ItemList items={items} />
        </main>
    );
};

export default Page;
