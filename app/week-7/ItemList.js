"use client";
import { useState } from "react";
import Item from './Item';

export default function ItemList({ items }) {

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
              className={`px-4 py-3 font-semibold rounded-lg transition ${sortBy === "name" ? "bg-emerald-600 text-white hover:bg-emerald-700" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`}>Name</button>

              <button
              type="button"
              onClick={() => setSortBy("category")}
              className={`px-4 py-3 font-semibold rounded-lg transition ${sortBy === "category" ? "bg-emerald-600 text-white hover:bg-emerald-700" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`}>Category</button>
            </div>

            <ul className="space-y-4">
              {sortedItems.map((item) => (
                <Item key={item.id} {...item} />
              ))}
            </ul>
          </div>
    );
}