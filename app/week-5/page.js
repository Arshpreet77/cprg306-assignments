// page.js

import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <div className="bg-blue-200 min-h-screen">
      {/*/ background changes yet to be made*/}  
    <div className="container mx-auto  ">
      <h1 className="text-4xl font-semibold mb-6 border-b-2 border-gray-500">Shopping List</h1>
      <ItemList />
    </div>
     </div>
  );
};

export default Page;
