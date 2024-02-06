

import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-2 border-b border-gray-300">
      <strong>Name:</strong> {name} <br />
      <strong>Quantity:</strong> {quantity} <br />
      <strong>Category:</strong> {category}
    </li>
  );
};

export default Item;

