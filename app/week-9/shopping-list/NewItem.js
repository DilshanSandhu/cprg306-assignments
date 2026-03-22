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
        <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg space-y-4 border-l-4 border-l-blue-500">
            <div className="mb-4">
                <label htmlFor="item-name" className="block mb-1 font-medium text-slate-700 dark:text-slate-200">Item Name: </label>

                <input
                    id="item-name"
                    type="text"
                    name="name"
                    required
                    placeholder="item name"
                    className="w-full p-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={item.name}
                    onChange={handleChange}
                />
            </div>

            <div className="flex gap-4 mb-4">
                <div className="flex-1">
                    <label htmlFor="item-qty" className="block mb-1 font-medium text-slate-700 dark:text-slate-200">Quantity: </label>
                    <input
                        id="item-qty"
                        name="quantity"
                        type="number"
                        min="1"
                        max="99"
                        required
                        className="w-full p-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={item.quantity}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-1">
                    <label htmlFor="item-cat" className="block mb-1 font-medium text-slate-700 dark:text-slate-200">Category: </label>
                    <select
                        id="item-cat"
                        name="category"
                        className="w-full p-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition focus:outline-none focus:ring-2 focus:ring-blue-500"
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

            <button type="submit" className="w-full bg-blue-600 text-white py-3 font-semibold rounded-xl transition hover:bg-blue-700 shadow-md">+</button>
        </form>
);
}