import { useEffect, useState } from "react";
import Api from "../lib/Api";
import DefaultInput from "../components/Forms/DefaultInput";
import Label from "../components/Forms/Label";
import { useNavigate } from "react-router-dom";
import { HOST_SERVER, ORG_NAME } from "../lib/constants";
import { Helmet } from "react-helmet";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token") !== undefined) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { data } = await Api.post(`${HOST_SERVER}/admin/login`, {
        email,
        password,
      });
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
    <>
      <Helmet>
        <title>تسجيل دخول المشرف | {ORG_NAME}</title>
        <meta
          name="description"
          content="صفحة تسجيل الدخول للوصول إلى لوحة التحكم الخاصة بموقع مؤسسة شباب قادرون. يرجى إدخال البريد الإلكتروني وكلمة المرور لتسجيل الدخول."
        />
        <meta
          name="keywords"
          content="تسجيل دخول, لوحة التحكم, إدارة الموقع, مؤسسة شباب قادرون, Admin Login"
        />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={`تسجيل دخول المشرف | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content="قم بتسجيل الدخول للوصول إلى لوحة تحكم موقع مؤسسة شباب قادرون."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta
          name="twitter:title"
          content={`تسجيل دخول المشرف | ${ORG_NAME}`}
        />
        <meta
          name="twitter:description"
          content="أدخل بياناتك للوصول إلى لوحة تحكم موقع مؤسسة شباب قادرون."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Helmet>
      <div className="flex h-full w-full flex-col">
        <div className="w-full bg-gray-100 px-5 py-10">
          <h1 className="text-4xl font-bold text-primary">لوحة التحكم</h1>
        </div>
        <main className="grid min-h-[50dvh] place-items-center">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-600">
              Admin Login
            </h2>
            {error && (
              <p className="my-3 rounded bg-secondary p-2 text-center text-white">
                {error}
              </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-4">
                <Label label="البريد الاكتروني" htmlFor="email" />
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
                <Label label="كلمة السر" htmlFor="password" />
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
                className="hover:bg-primary-dark mt-6 w-full rounded-lg bg-primary p-3 font-bold text-white transition-colors duration-300 disabled:opacity-50"
                disabled={loading}>
                {loading ? "جار تسجيل الدخول..." : "تسجيل الدخول"}
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
