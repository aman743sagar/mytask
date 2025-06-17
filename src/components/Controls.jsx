
import { useState } from "react";

export default function Controls({ onStart, onStop }) {
  const [elevators, setElevators] = useState(3);
  const [floors, setFloors] = useState(10);
  const [interval, setInterval] = useState(2000);

  const handleStart = () => {
    onStart({ elevatorCount: elevators, floorCount: floors, requestInterval: interval });
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center  mb-12">
      <div>
        <label className="block text-sm">Elevators</label>
        <input
          type="number"
          min="1"
          value={elevators}
          onChange={(e) => setElevators(+e.target.value)}
          className="border rounded p-1"
        />
      </div>
      <div>
        <label className="block text-sm">Floors</label>
        <input
          type="number"
          min="2"
          value={floors}
          onChange={(e) => setFloors(+e.target.value)}
          className="border rounded p-1"
        />
      </div>
      <div>
        <label className="block text-sm">Request Interval (ms)</label>
        <input
          type="number"
          min="500"
          value={interval}
          onChange={(e) => setInterval(+e.target.value)}
          className="border rounded p-1"
        />
      </div>
      <button style={{marginTop:"15px", marginLeft:"20px"}} onClick={handleStart} className="bg-green-500 text-white px-5 py-2 rounded">
        Start
      </button>
      <button  style={{marginTop:"15px",marginLeft:"20px"}} onClick={onStop} className="bg-red-500 text-white px-5 py-2 rounded">
        Stop
      </button>
    </div>
  );
}