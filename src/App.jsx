
import { useEffect, useState } from "react";
import axios from "axios";
import Elevator from "./components/Elevator";
import Controls from "./components/Controls";
import Metrics from "./components/Metrics";

const API = "http://localhost:5000";

function App() {
  // State to store elevator and request data
  const [elevators, setElevators] = useState([]);
  const [requests, setRequests] = useState([]);
  const [intervalId, setIntervalId] = useState(null);

  // Fetch current elevator and request status from server
  const fetchStatus = async () => {
    const res = await axios.get(`${API}/status`);
    console.log("thsi the response",res);
    setElevators(res.data.elevators);
    setRequests(res.data.requests);
  };

  // Start simulation with user configuration
  const startSimulation = async (config) => {
    await axios.post(`${API}/init`, config); // initialize elevators and floors
    await axios.post(`${API}/start`, config); // start generating requests
    fetchStatus(); // fetch initial data

    // Set interval to keep polling backend for updates every second
    const id = setInterval(fetchStatus, 1000);
    setIntervalId(id);
  };

  // Stop simulation and clear polling interval
  const stopSimulation = async () => {
    clearInterval(intervalId);
    await axios.post(`${API}/stop`);
  };

  return (
    <div className="p-4 md:p-8 space-y-8 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-blue-900 drop-shadow-md">
         Smart Elevator System Simulation
      </h1>

      {/* Controls to start/stop simulation and configure inputs */}
      <Controls onStart={startSimulation} onStop={stopSimulation} />

      {/* Elevators Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {elevators.map((elevator) => (
          <Elevator key={elevator.id} data={elevator} />
        ))}
      </div>

      {/* Performance metrics */}
      <Metrics requests={requests} />
    </div>
  );
}

export default App;
