"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useUserAuth } from "../../contexts/AuthContext";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  async function loadItems() {
    if (!user) return;

    const itemsFromDb = await getItems(user.uid);
    setItems(itemsFromDb);
  }

  useEffect(() => {
    if (user)
    {
    loadItems();
    }
  }, [user]);

  async function handleAddItem(newItem) {
    if (!user) return;
    const id = await addItem(user.uid, newItem);
    setItems((prev) => [...prev, { ...newItem, id }]);
  }

  function handleItemSelect(item) {
    let cleanedName = item.name.split(",")[0].trim();

    cleanedName = cleanedName.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    ).trim();

    setSelectedItemName(cleanedName);
  }

  if (!user) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-100 dark:bg-slate-950 p-6">
        <p className="text-slate-800 dark:text-slate-200">
          Please log in to view the shopping list.
        </p>

        <Link
          href="/week-10"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Back to Login
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-950 p-6">
      <h1 className="text-4xl font-extrabold text-center text-slate-900 dark:text-white mb-8">
        Shopping List
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
        <div className="flex-1 space-y-6">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}