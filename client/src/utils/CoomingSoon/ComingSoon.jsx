import { useState, useEffect } from "react";
import "./ComingSoon.css";
const ComingSoon = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-[91vh] items-center justify-center bg-gradient-to-br from-red-500 to-black/85 p-4 md:h-[88vh]">
      {loading ?
        <div className="flex flex-col items-center space-y-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent" />
          <p className="font-semibold text-white">جاري التحميل...</p>
        </div>
      : <div className="animate-fade-in text-center" dir="ltr">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            تحت التطوير
          </h1>

          <div className="space-y-4">
            <p className="text-xl text-white opacity-90">قريبًا.. انتظرونا</p>

            <div className="mx-auto h-2.5 w-full max-w-xs rounded-full bg-gray-200">
              <div
                className="animate-progress h-2.5 rounded-full bg-primary"
                style={{ width: "75%" }} />
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default ComingSoon;
