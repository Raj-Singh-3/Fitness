import React, { useState } from "react";

const BMICalculator = () => {
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const convertHeightToMeters = (value, unit) => {
    switch (unit) {
      case "cm":
        return value / 100;
      case "m":
        return value;
      case "ft":
        return value * 0.3048;
      default:
        return value;
    }
  };

  const convertWeightToKg = (value, unit) => {
    return unit === "lbs" ? value * 0.453592 : value;
  };

  const calculateBMI = () => {
    const heightInMeters = convertHeightToMeters(parseFloat(height), heightUnit);
    const weightInKg = convertWeightToKg(parseFloat(weight), weightUnit);
    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = (weightInKg / (heightInMeters ** 2)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) setCategory("Underweight");
      else if (bmiValue < 24.9) setCategory("Normal weight");
      else if (bmiValue < 29.9) setCategory("Overweight");
      else setCategory("Obese");
    } else {
      setBmi(null);
      setCategory("");
    }
  };
  

  // Data for the height-weight chart
  const chartData = [
    { height: "150 cm", weightRange: "45-56 kg" },
    { height: "155 cm", weightRange: "47-58 kg" },
    { height: "160 cm", weightRange: "50-62 kg" },
    { height: "165 cm", weightRange: "53-65 kg" },
    { height: "170 cm", weightRange: "55-69 kg" },
    { height: "175 cm", weightRange: "58-72 kg" },
    { height: "180 cm", weightRange: "60-75 kg" },
    { height: "185 cm", weightRange: "63-78 kg" },
    { height: "190 cm", weightRange: "65-81 kg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col justify-center items-center p-10">
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl">
        {/* BMI Calculator */}
        <div className="bg-white rounded-lg shadow-xl p-6 w-full lg:w-1/2 text-black">
          <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">BMI Calculator</h1>
          <div className="mb-4">
            <label className="font-medium text-gray-700">Gender</label>
            <select
              className="w-full mt-2 p-3 border rounded-lg"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex flex-col md:flex-row gap-6 mb-4">
            <div className="w-full">
              <label className="font-medium text-gray-700">Height</label>
              <input
                type="number"
                className="w-full mt-2 p-3 border rounded-lg"
                placeholder="Enter your height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
              <select
                className="w-full mt-2 p-3 border rounded-lg"
                value={heightUnit}
                onChange={(e) => setHeightUnit(e.target.value)}
              >
                <option value="cm">Centimeters</option>
                <option value="m">Meters</option>
                <option value="ft">Feet</option>
              </select>
            </div>
            <div className="w-full">
              <label className="font-medium text-gray-700">Weight</label>
              <input
                type="number"
                className="w-full mt-2 p-3 border rounded-lg"
                placeholder="Enter your weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <select
                className="w-full mt-2 p-3 border rounded-lg"
                value={weightUnit}
                onChange={(e) => setWeightUnit(e.target.value)}
              >
                <option value="kg">Kilograms</option>
                <option value="lbs">Pounds</option>
              </select>
            </div>
          </div>
          <button
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition w-full"
            onClick={calculateBMI}
          >
            Calculate BMI
          </button>
          {bmi && (
            <div className="mt-6 text-center">
              <p className="text-xl font-bold text-indigo-700">
                Your BMI: <span className="text-black">{bmi}</span>
              </p>
              <p className="text-lg font-medium text-gray-700">Category: {category}</p>
            </div>
          )}
        </div>

        {/* Height-Weight Chart */}
        <div className="bg-white rounded-lg shadow-xl p-6 w-full lg:w-1/2 text-black">
          <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">Height-Weight Chart</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left text-sm">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="px-4 py-2">Height</th>
                  <th className="px-4 py-2">Ideal Weight Range</th>
                </tr>
              </thead>
              <tbody>
                {chartData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                  >
                    <td className="px-4 py-2">{row.height}</td>
                    <td className="px-4 py-2">{row.weightRange}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
