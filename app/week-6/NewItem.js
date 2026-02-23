"use client";
import { useState } from "react";

export default function NewItem( {onAddItem} ) {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const categories = [
    "bakery",
    "canned goods",
    "dairy",
    "dry goods",
    "produce",
    "meat",
    "household",
  ];

    function handleSubmit(e) {
        e.preventDefault();

        if (name.trim() === "" || quantity < 1 || quantity > 99) {
            return;
        }

        const id =  Math.random().toString(36).substring(2, 9);

        const item = {
            id,
            name: name.trim(),
            quantity: Number(quantity),
            category,
        };
        
        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white dark:bg-slate-800 p-6 shadow-lg space-y-4">
            <div className="mb-4">
                <label htmlFor="item-name" className="block mb-1 font-medium text-gray-700 dark:text-slate-200">Item Name: </label>

                <input
                    id="item-name"
                    type="text"
                    required
                    placeholder="e.g., bread"
                    className="w-full p-2 border border-slate-300 rounded-lg text-slate-900 dark:text-white dark:bg-slate-900 transition focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="flex gap-4 mb-4">
                <div className="flex-1">
                    <label htmlFor="item-qty" className="block mb-1 font-medium text-gray-700 dark:text-slate-200">Quantity: </label>
                    <input
                        id="item-qty"
                        type="number"
                        min="1"
                        max="99"
                        required
                        className="w-full p-2 border border-slate-300 rounded-lg text-slate-900 dark:text-white dark:bg-slate-900 transition focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={quantity}
                        onChange={(e) => {const v = e.target.value;
                            setQuantity(v === "" ? "" : Number(v));
                            }}/>
                </div>
                <div className="flex-1">
                    <label htmlFor="item-cat" className="block mb-1 font-medium text-gray-700 dark:text-slate-200">Category: </label>
                    <select
                        id="item-cat"
                        className="w-full p-3 bg-white border border-slate-300 rounded-lg text-slate-900 dark:bg-slate-900 dark:text-white transition focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
      
                    </select>
                </div>
            </div>

            <button type="submit" className="w-full bg-emerald-600 text-white py-3 font-semibold rounded-lg transition hover:bg-emerald-700">+</button>
        </form>
);
}