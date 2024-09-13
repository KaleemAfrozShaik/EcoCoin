import React, { useState } from "react";
import './CarbonFootPrintCalculator.css'
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CarbonFootprintCalculator = () => {
  const [electricity, setElectricity] = useState("800");
  const [flightDistance, setFlightDistance] = useState("8");
  const [fuelConsumption, setFuelConsumption] = useState("100");
  const [waterUsage, setWaterUsage] = useState("12000"); // New water usage input
  const [wasteGenerated, setWasteGenerated] = useState("minimal"); // New waste input
  const [foodChoice, setFoodChoice] = useState("veg");
  const [transportMode, setTransportMode] = useState("public_transport");
  const [shoppingChoice, setShoppingChoice] = useState("minimal");
  const [carbonEmissions, setCarbonEmissions] = useState(null);
  const [error, setError] = useState("");
  const API_KEY = "EPhv7quiiWT4iYvn1hocmQ"; // Replace with your API key

  const handleCalculateFootprint = async () => {
    if (!electricity || !flightDistance || !fuelConsumption || !waterUsage) {
      setError("Please provide valid inputs for all fields.");
      return;
    }

    setError("");
    setCarbonEmissions(null);

    try {
      const response = await axios.post(
        "https://www.carboninterface.com/api/v1/estimates",
        {
          type: "flight", // For demo purposes
          passengers: 1,
          legs: [
            {
              departure_airport: "JFK",
              destination_airport: "LAX",
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      setCarbonEmissions(response.data.data.attributes.carbon_kg);
    } catch (err) {
      setError("Error calculating carbon footprint.");
    }
  };

  // Prepare data for the chart
  const data = [
    { name: "Electricity", value: parseFloat(electricity) || 0 },
    { name: "Flight", value: parseFloat(flightDistance) || 0 },
    { name: "Fuel", value: parseFloat(fuelConsumption) || 0 },
    { name: "Water", value: parseFloat(waterUsage) || 0 }, // Water usage in chart
    {
      name: "Waste",
      value:
        parseFloat(wasteGenerated) === "minimal"
          ? 50
          : wasteGenerated === "average"
          ? 100
          : 150,
    }, // Waste in chart
  ];

  return (
    <div className="mainContainer">
    <div style={{ padding: "60px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Carbon Footprint Calculator</h1>
      {/* Electricity Input */}
      <div style={{ marginBottom: "20px" }}>
        <label>Electricity Usage (kWh per month):</label>
        <input
          type="number"
          placeholder="Enter kWh"
          value={electricity}
          onChange={(e) => setElectricity(e.target.value)}
          style={{ margin: "10px 0", padding: "10px", width: "100%" }}
        />
        <p>Average electricity use per month: ~150 kWh</p>
      </div>

      {/* Flight Distance Input */}
      <div style={{ marginBottom: "20px" }}>
        <label>Flight Distance (km):</label>
        <input
          type="number"
          placeholder="Enter distance in km"
          value={flightDistance}
          onChange={(e) => setFlightDistance(e.target.value)}
          style={{ margin: "10px 0", padding: "10px", width: "100%" }}
        />
        <p>
          Average flight distance per month for frequent travelers: ~1,000 km
        </p>
      </div>

      {/* Fuel Consumption Input */}
      <div style={{ marginBottom: "20px" }}>
        <label>Fuel Consumption (liters/km):</label>
        <input
          type="number"
          placeholder="Enter fuel usage"
          value={fuelConsumption}
          onChange={(e) => setFuelConsumption(e.target.value)}
          style={{ margin: "10px 0", padding: "10px", width: "100%" }}
        />
        <p>Average fuel consumption for a car: ~6 liters per 100 km</p>
      </div>

      {/* Water Usage Input */}
      <div style={{ marginBottom: "20px" }}>
        <label>Water Usage (liters per month):</label>
        <input
          type="number"
          placeholder="Enter water usage"
          value={waterUsage}
          onChange={(e) => setWaterUsage(e.target.value)}
          style={{ margin: "10px 0", padding: "10px", width: "100%" }}
        />
        <p>Average water use per month: ~12,000 liters</p>
      </div>

      {/* Food Choice */}
      <div style={{ marginBottom: "20px" }}>
        <label>Food Choice:</label>
        <select
          value={foodChoice}
          onChange={(e) => setFoodChoice(e.target.value)}
          style={{ padding: "10px", width: "100%" }}
        >
          <option value="veg">Vegetarian</option>
          <option value="nonveg">Non-Vegetarian</option>
        </select>
        <p>Average vegetarian meal carbon impact: ~2 kg CO₂ per day</p>
        <p>Average non-vegetarian meal carbon impact: ~6 kg CO₂ per day</p>
      </div>

      {/* Transportation Mode */}
      <div style={{ marginBottom: "20px" }}>
        <label>Transportation Mode:</label>
        <select
          value={transportMode}
          onChange={(e) => setTransportMode(e.target.value)}
          style={{ padding: "10px", width: "100%" }}
        >
          <option value="public_transport">Public Transport</option>
          <option value="car">Car</option>
          <option value="bike">Bike</option>
          <option value="electric_vehicle">Electric Vehicle</option>
          <option value="auto">Auto</option>
        </select>
        <p>
          Public transport emits less CO₂ compared to cars (~0.1 kg CO₂ per km
          for buses)
        </p>
      </div>

      {/* Shopping Input */}
      <div style={{ marginBottom: "20px" }}>
        <label>Shopping Habits:</label>
        <select
          value={shoppingChoice}
          onChange={(e) => setShoppingChoice(e.target.value)}
          style={{ padding: "10px", width: "100%" }}
        >
          <option value="minimal">Minimal Shopping</option>
          <option value="average">Average Shopping</option>
          <option value="frequent">Frequent Shopping</option>
        </select>
        <p>
          Average carbon footprint per month from shopping (clothes, goods):
          ~50-200 kg CO₂
        </p>
      </div>

      {/* Waste Generated Input */}
      <div style={{ marginBottom: "20px" }}>
        <label>Waste Generated:</label>
        <select
          value={wasteGenerated}
          onChange={(e) => setWasteGenerated(e.target.value)}
          style={{ padding: "10px", width: "100%" }}
        >
          <option value="minimal">Minimal Waste</option>
          <option value="average">Average Waste</option>
          <option value="high">High Waste</option>
        </select>
        <p>Minimal waste generated: ~50 kg CO₂ per month</p>
        <p>Average waste generated: ~100 kg CO₂ per month</p>
        <p>High waste generated: ~150 kg CO₂ per month</p>
      </div>

      {/* Calculate Button */}
      <button
        onClick={handleCalculateFootprint}
        style={{
          padding: "10px",
          width: "100%",
          backgroundColor: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Calculate Footprint
      </button>

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <div className="result">
        {/* Carbon Emissions Output */}
        {carbonEmissions !== null && (
          <div className="bar">
            <h3>Your Carbon Emissions:</h3>
            <p>{carbonEmissions} kg CO₂</p>

            {/* Responsive Container for the Bar Chart */}
            <ResponsiveContainer width="100%" height={600}>
              <BarChart data={data} axisLine={false} tickLine={false}>
                <XAxis dataKey="name" />
                <YAxis tickCount={25} interval={0} domain={[0, 15000]} />

                <Legend />
                <Bar dataKey="value" fill="#3dc24d" barSize={50}/>
              </BarChart>
            </ResponsiveContainer>
        </div>
      )}
    </div>
    </div>
  );
};

export default CarbonFootprintCalculator;
