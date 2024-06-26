export default function Item ({item, onSelect}) {
  return (
    <ul className='border border-2 p-2 m-4 bg-yellow-200 text-black' onClick={()=>onSelect(item)}>
      <li className='text-4xl font-bold'>{item.name}</li>
      <li className='text-sm ' >Category: {item.category}</li>
      <li className='text-sm ' >Quantity: {item.quantity}</li>
    </ul>
  )
}