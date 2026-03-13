"use client";

import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas";

export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    function handleAddItem(newItem) {

        setItems((prev) => [...prev, newItem]);
    }

    function handleItemSelect(item) {
    let cleanedName = item.name.split(",")[0].trim();
    setSelectedItemName(cleanedName);
    }

    function handleItemSelect(item) {
  let Name = item.name.split(",")[0].trim();

  Name = Name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"").trim();

  setSelectedItemName(Name);
}

    return (
        <main className="min-h-screen bg-slate-100 dark:bg-[#020617] p-6">
            <div className="mx-auto max-w-6xl">
                <h1 className="text-4xl font-extrabold text-center text-slate-900 dark:text-white mb-8">
                    Shopping List
                </h1>

                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1 space-y-6">
                        <NewItem onAddItem={handleAddItem} />
                        <ItemList items={items} onItemSelect={handleItemSelect} />
                    </div>
                    <div className="flex-1">
                    <MealIdeas ingredient={selectedItemName} />
                    </div>
                </div>
            </div>
        </main>
    );
}