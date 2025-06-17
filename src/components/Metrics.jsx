import AnalyticsIcon from '@mui/icons-material/Analytics';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import PendingIcon from '@mui/icons-material/Pending';



export default function Metrics({ requests }) {
    if (!requests.length) return null;

    // Calculate average wait time across all requests
    const avgWait = (
      requests.reduce((acc, r) => acc + (r.waitTime || 0), 0) / requests.length
    ).toFixed(2);

    // Find the maximum wait time from all requests
    const maxWait = (
      Math.max(...requests.map((r) => r.waitTime || 0))
    ).toFixed(2);

    return (
      <div className="mt-6 border-t border-blue-200 pt-4 bg-white rounded-xl shadow-md p-4 text-blue-900">
        {/* Header */}
        <h3 className="text-xl font-semibold mb-3"> <AnalyticsIcon/> Simulation Metrics</h3>
  
        {/* Metrics display */}
        <p className="text-sm"> <TimelapseIcon/>  <strong>Average Wait Time:</strong> {avgWait}s</p>
        <p className="text-sm"> <HourglassTopIcon/> <strong>Max Wait Time:</strong> {maxWait}s</p>
        <p className="text-sm"> <PendingIcon/>  <strong>Pending Requests:</strong> {requests.length}</p>
      </div>
    );
  }