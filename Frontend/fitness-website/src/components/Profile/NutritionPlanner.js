import React, { useState } from "react";

const NutritionPlanner = () => {
  const [mealPlan, setMealPlan] = useState([]);
  const [meal, setMeal] = useState("");
  const [calories, setCalories] = useState("");

  const addMeal = () => {
    setMealPlan([...mealPlan, { meal, calories }]);
    setMeal("");
    setCalories("");
  };

  const deleteMeal = (index) => {
    setMealPlan(mealPlan.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Nutrition Planner</h2>
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Meal"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
          className="border p-2 rounded flex-1 text-sm sm:text-base"
        />
        <input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          className="border p-2 rounded text-sm sm:text-base"
        />
        <button
          onClick={addMeal}
          className="bg-blue-500 text-white px-3 sm:px-4 py-2 rounded text-sm sm:text-base"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {mealPlan.map((item, index) => (
          <li
            key={index}
            className="flex justify-between bg-gray-100 p-2 rounded text-sm sm:text-base"
          >
            {item.meal} - {item.calories} cal
            <button
              onClick={() => deleteMeal(index)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NutritionPlanner;
