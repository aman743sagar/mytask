import BoyIcon from '@mui/icons-material/Boy';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import RoomIcon from '@mui/icons-material/Room';
import ElevatorIcon from '@mui/icons-material/Elevator';
export default function Elevator({ data }) {
  // console.log("dsfdsfjksfdn",data);
    return (
      <div className="border border-blue-300 bg-white rounded-xl shadow-lg p-6 space-y-2 text-blue-900">
        {/* Elevator ID */}
        <h2 className="text-xl font-bold text-center mb-2"> <ElevatorIcon/>Elevator {data.id}</h2>

        {/* Current floor of the elevator */}
        <p className="text-sm"> <RoomIcon/> <strong>Current Floor:</strong> {data.currentFloor}</p>

        {/* Target floor (or None if idle) */}
        <p className="text-sm"><CrisisAlertIcon/> <strong>Target Floor:</strong> {data.targetFloor ?? "None"}</p>

        {/* Elevator movement direction */}
        <p className="text-sm"><SwapVertIcon/> <strong>Direction:</strong> {data.state}</p>

        {/* Passenger count inside the elevator */}
        <p className="text-sm"> <BoyIcon/> <strong>Passengers:</strong> {data.passengers.length}</p>
      </div>
    );
  }