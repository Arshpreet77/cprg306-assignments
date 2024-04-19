"use client";
import { useState } from "react";

const NewItem = ({ addItem }) => {
    const [name, setName ] = useState("");
    const [quantity, setQuantity ] = useState(1);
    const [category, setCategory ] = useState("produce");

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = { name, quantity, category };
        
        console.log(item)
        
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

        const id = Math.random().toString(36); //this will generate a random id. 
        addItem({id, name, quantity, category});

        setName("");
        setQuantity(1);
        setCategory("produce");
    };
    
    
    return (
        
        <form onSubmit={handleSubmit} className="m-4 p-4 bg-slate-500 flex flex-col w-1/3">
        <label className="p-2 ">
            Name:
            <input placeholder="Item name" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="text-black "/>
        </label>
        <label className="p-2">
            Quantity:
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min={1} max={99} required className="text-black"/>
        </label>
        <label className="p-2">
            Category:
            <select  value={category} onChange={(e) => setCategory(e.target.value)} className="text-black">
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen">Frozen</option>
                <option value="canned-goods">Canned Goods</option>
                <option value="dry-goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
            </select>
        </label>
        <button type="submit" className="border-2 rounded-lg w-20 p-2 m-2">Submit</button>
    </form>
);
};

export default NewItem;