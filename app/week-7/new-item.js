import { useState } from "react";

export default function NewShoppingItem({ onAddItem }) {
    const [itemName, setItemName] = useState("");
    const [itemQuantity, setItemQuantity] = useState(1);
    const [itemCategory, setItemCategory] = useState("produce");

    const categories = [
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
            name: itemName,
            quantity: parseInt(itemQuantity, 10),
            category: itemCategory,
        };

        onAddItem(newItem);

        setItemName('');
        setItemQuantity(1);
        setItemCategory('produce');
    };

    return (
        <main className="flex justify-center w-full">
            <form onSubmit={handleFormSubmit} className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
                <div className="mb-2">
                    <input
                        type="text"
                        required
                        placeholder="Item name"
                        onChange={(e) => setItemName(e.target.value)}
                        value={itemName}
                        className="w-full mt-1 border-2 text-black border-gray-300 p-2 rounded-lg font-sans"
                    />
                </div>
                <div className="flex justify-between">
                    <input
                        type="number"
                        required
                        min="1"
                        max="99"
                        value={itemQuantity}
                        onChange={(e) => setItemQuantity(e.target.value)}
                        className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                    />
                    <select
                        required
                        value={itemCategory}
                        onChange={(e) => setItemCategory(e.target.value)}
                        className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                    >
                        {categories.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                    Add new item
                </button>
            </form>
        </main>
    );
}
