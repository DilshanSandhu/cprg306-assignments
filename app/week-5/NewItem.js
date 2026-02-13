"use client";
import { useState } from "react";

export default function NewItem() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function handleSubmit(e) {
        e.preventDefault();

        const item = {
            name: name,
            quantity: quantity,
            category: category,
        };

        console.log(item);

        alert(`Added ${quantity} ${name}(s) to the ${category} category!`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
            <div className="mb-4">
                <label className="block mb-1 font-medium text-gray-700">Item Name: </label>

                <input
                    type="text"
                    required
                    placeholder="item name"
                    className="w-full p-2 border rounded-md text-black"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="flex gap-4 mb-4">
                <div className="flex-1">
                    <label className="block mb-1 font-medium text-gray-700">Quantity: </label>
                    <input
                        type="number"
                        min="1"
                        max="99"
                        required
                        className="w-full p-2 border rounded-md text-black"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                    />
                </div>
                <div className="flex-1">
                    <label className="block mb-1 font-medium text-gray-700">Category: </label>
                    <select
                        className="w-full p-2 border rounded-md text-black"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option>produce</option>
                        <option>dairy</option>
                        <option>bakery</option>
                        <option>meat</option>
                        <option>frozen foods</option>
                        <option>fruits</option>
                        <option>canned goods</option>
                        <option>dry goods</option>
                        <option>beverages</option>
                        <option>snacks</option>
                        <option>household</option>
      
                    </select>
                </div>
            </div>

            <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-400">+</button>
        </form>
);
}