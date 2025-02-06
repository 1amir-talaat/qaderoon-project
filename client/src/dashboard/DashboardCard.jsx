import { Link } from "react-router-dom";
import "./DashboardCard.css";

const DashboardCard = ({ action, url, icon }) => {
  return (
    <Link
      to={url}
      className="group dashboard-card flex min-h-[300px] transform flex-col items-center rounded-lg bg-gray-100 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="flex flex-grow flex-col items-center justify-center">
        {/* Icon */}
        <div className="mb-4 text-4xl text-primary">{icon}</div>

        {/* Action Text */}
        <h3 className="text-center text-xl font-bold text-primary">{action}</h3>
      </div>
    </Link>
  );
};

export default DashboardCard;
