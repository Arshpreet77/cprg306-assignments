// Item.js

import React from 'react';

const Item = ({name, quantity, category}) => {
  return (
    <ul className='border-2 p-2 m-4 bg-yellow-200 text-black'>
        <li className='text-4xl font-bold'  >Name: {name}</li>
        <li className='text-sm ' >Buy {quantity} in {category}</li>
{/* {console.log("Hello World")} */}
    </ul>
  );
};

export default Item;
