const Item = ({ name, quantity, category }) => {
  return (
   <ul className='border p-2 m-4 bg-yellow-200 text-black'>
    <li className='text-4xl font-bold'>
      Name: {name}
    </li>
    <li>
      buy {quantity} in the {category} category
    </li>
   </ul>
  );
}

export default Item;
