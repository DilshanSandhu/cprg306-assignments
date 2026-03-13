"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
    const reponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

    const data = await reponse.json();
    return data.meals || [];
}

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        setMeals([]);

        if (!ingredient) {
            setMeals([]);
            return;
        }

        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 border-l-4 border-l-blue-500 bg-white dark:bg-slate-900 p-5 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Meal Ideas</h2>

            {ingredient ? (
                <>
                <p className="mb-3 text-slate-600 dark:text-slate-300">
            Here are some meal ideas using <span className="font-semibold">{ingredient}</span>:
          </p>
          {meals.length > 0 ? (
            <ul className="space-y-2">
              {meals.map((meal) => (
                <li
                  key={meal.idMeal}
                  className="rounded-lg border border-slate-200 dark:border-slate-700 p-3 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                  {meal.strMeal}
                </li>
              ))}
            </ul>
            ) : (
                <p className="text-slate-600">No meal ideas found for this ingredient.</p>
            )}
            </>
            ) : (
                <p className="text-slate-600">Please select an ingredient to see meal ideas.</p>
             )}
        </div>
    );
}