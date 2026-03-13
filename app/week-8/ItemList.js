"use client";
import { useState } from "react";
import Item from './Item';

export default function ItemList({ items, onItemSelect }) {

    const[sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
      if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      else{
        return a.name.localeCompare(b.name);
      }
    });
    return (
          <div className="space-y-4">
            <div className="flex gap-2">
              <button
              type="button"
              onClick={() => setSortBy("name")}
              className={`px-4 py-2 font-semibold rounded-lg transition ${
              sortBy === "name"
              ? "bg-blue-600 text-white"
              : "bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200"
              }`}>Name</button>

              <button
              type="button"
              onClick={() => setSortBy("category")}
              className={`px-4 py-2 font-semibold rounded-lg transition ${
              sortBy === "category"
              ? "bg-blue-600 text-white"
              : "bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200"
              }`}>Category</button>
            </div>

            <ul className="space-y-4">
              {sortedItems.map((item) => (
                <Item key={item.id} {...item} onSelect={() => onItemSelect(item)}/>
              ))}
            </ul>
          </div>
    );
}