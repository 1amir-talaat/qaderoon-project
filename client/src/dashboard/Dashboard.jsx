import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../lib/Api";
import { HOST_SERVER } from "../lib/constants";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const token = sessionStorage.getItem("token");
        if (!token) {
          navigate("/dashboard/login", { replace: true });
          return;
        }
        const response = await Api.post(`${HOST_SERVER}/admin/verify`, {
          token,
        });
        if (response.status === 200) {
          setIsVerified(true);
        } else {
          navigate("/dashboard/login", { replace: true });
        }
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        navigate("/dashboard/login", { replace: true });
      }
    };
    verifyAdmin();
  }, [navigate]);

  if (!isVerified) return null; // Show nothing until verification completes

  return (
    <div className="flex h-full w-full flex-col">
      <div className="w-full bg-gray-100 px-5 py-10">
        <h1 className="text-4xl font-bold text-primary">لوحة التحكم</h1>
      </div>
      <main className="flex-1 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
