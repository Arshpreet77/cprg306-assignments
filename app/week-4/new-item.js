"use client";
import React, { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const categoryLabel = [
    { label: 'Produce', value: 'produce' },
    { label: 'Dairy', value: 'dairy' },
    { label: 'Bakery', value: 'bakery' },
    { label: 'Meat', value: 'meat' },
    { label: 'Frozen Foods', value: 'frozen foods' },
    { label: 'Canned Goods', value: 'canned goods' },
    { label: 'Dry Goods', value: 'dry goods' },
    { label: 'Beverages', value: 'beverages' },
    { label: 'Snacks', value: 'snacks' },
    { label: 'Household', value: 'household' },
    { label: 'Others', value: 'others' },
];

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newItem = {
        name: name,
        quantity: quantity,
        category: category,
    };

    console.log(newItem);
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    // Reset form fields
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleFormSubmit} className="max-w-sm mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          className="form-input mt-1 block w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-gray-700">Quantity</label>
        <input
          type="number"
          id="quantity"
          className="form-input mt-1 block w-full"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700">Category</label>
        <select
          id="category"
          className="form-select mt-1 block w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen-foods">Frozen Foods</option>
          <option value="canned-goods">Canned Goods</option>
          <option value="dry-goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}
