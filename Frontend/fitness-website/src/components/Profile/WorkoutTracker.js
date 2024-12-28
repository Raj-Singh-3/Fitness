
import React, { useState } from "react";

const WorkoutTracker = () => {
  const [workouts, setWorkouts] = useState([]);
  const [exercise, setExercise] = useState("");

  const addWorkout = () => {
    setWorkouts([...workouts, { exercise, date: new Date().toLocaleDateString() }]);
    setExercise("");
  };

  const deleteWorkout = (index) => {
    setWorkouts(workouts.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Workout Tracker</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add Exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <button
          onClick={addWorkout}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {workouts.map((workout, index) => (
          <li
            key={index}
            className="flex justify-between bg-gray-100 p-2 rounded"
          >
            {workout.exercise} <span>{workout.date}</span>
            <button
              onClick={() => deleteWorkout(index)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutTracker;
