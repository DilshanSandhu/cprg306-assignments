"use client";
import { useState } from "react";

const initialState = {
    name: "",
    quantity: 1,
    category: "produce",
};

export default function NewItem( {onAddItem} ) {

    const [item, setItem] = useState(initialState);

    const categories = [
        "bakery",
        "canned goods",
        "dairy",
        "dry goods",
        "produce",
        "meat",
        "household",
    ];

    const handleChange = (e) => {
        const {name, value, type} = e.target;

        setItem((prev) => ({
            ...prev,
            [name]: type === "number" ? Number(value) : value,
        }));

    }

    function handleSubmit(e) {
        e.preventDefault();

        const newItem = {
            ...item, 
            id: Math.random().toString(36).substring(2, 9),
        };

        onAddItem(newItem);

        setItem(initialState);
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
            <div className="mb-4">
                <label htmlFor="item-name" className="block mb-1 font-medium text-gray-700">Item Name: </label>

                <input
                    id="item-name"
                    type="text"
                    name="name"
                    required
                    placeholder="item name"
                    className="w-full p-2 border rounded-md text-black"
                    value={item.name}
                    onChange={handleChange}
                />
            </div>

            <div className="flex gap-4 mb-4">
                <div className="flex-1">
                    <label htmlFor="item-qty" className="block mb-1 font-medium text-gray-700">Quantity: </label>
                    <input
                        id="item-qty"
                        name="quantity"
                        type="number"
                        min="1"
                        max="99"
                        required
                        className="w-full p-2 border rounded-md text-black"
                        value={item.quantity}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-1">
                    <label htmlFor="item-cat" className="block mb-1 font-medium text-gray-700">Category: </label>
                    <select
                        id="item-cat"
                        name="category"
                        className="w-full p-2 border rounded-md text-black"
                        value={item.category}
                        onChange={handleChange}>

                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
      
                    </select>
                </div>
            </div>

            <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-400">+</button>
        </form>
);
}