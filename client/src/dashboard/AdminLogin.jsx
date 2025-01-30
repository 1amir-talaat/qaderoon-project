import { useEffect, useState } from "react";
import axios from "axios";
import DefaultInput from "../components/Forms/DefaultInput";
import Label from "../components/Forms/Label";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token") != undefined) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_HOST_SERVER}admin/login`,
        { email, password }
      );
      if (data.refreshToken) {
        sessionStorage.setItem("token", data.refreshToken);
        navigate("/dashboard", { replace: true });
      } else {
        throw new Error("Token not received");
      }
    } catch (err) {
      console.error(err);
      setError("Invalid credentials");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div className="bg-gray-100 w-full py-10 px-5">
        <h1 className="text-4xl font-bold text-primary">لوحة التحكم</h1>
      </div>
      <main className="grid place-items-center min-h-[50dvh]">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-600 mb-6">
            Admin Login
          </h2>
          {error && (
            <p className="bg-secondary text-white p-2 my-3 rounded text-center">
              {error}
            </p>
          )}
          <form
            onSubmit={handleSubmit}
            className="space-y-4">
            <div className="mb-4">
              <Label
                label="البريد الاكتروني"
                htmlFor="email"
              />
              <DefaultInput
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <Label
                label="كلمة السر"
                htmlFor="password"
              />
              <DefaultInput
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-primary hover:bg-primary-dark text-white p-3 rounded-lg font-bold transition-colors duration-300 disabled:opacity-50"
              disabled={loading}>
              {loading ? "جار تسجيل الدخول..." : "تسجيل الدخول"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
