"use client";

import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./NewItem";
import ItemList from "./ItemList";

export default function Page() {

    const [items, setItems] = useState(itemsData);

    function handleAddItem(newItem) {

        setItems((prev) => [...prev, newItem]);
    }

    return (
        <main className="min-h-screen bg-emerald-50 dark:bg-slate-900 p-6">
            <div className="mx-auto w-full max-w-2xl space-y-6">
                <h1 className="text-4xl font-extrabold text-center text-emerald-800 dark:text-slate-200">
                    Shopping List
                </h1>

                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} />
            </div>
        </main>
    );
}