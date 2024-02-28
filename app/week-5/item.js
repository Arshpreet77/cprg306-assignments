"use client";
import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        <li className="flex justify-between items-center bg-gray-100 p-2 rounded shadow mb-2">
            <span className="font-medium">{name}</span>
            <span className="text-sm">{quantity}</span>
            <span className="text-gray-600 italic">{category}</span>
       </li>
    );
};
export default Item;
