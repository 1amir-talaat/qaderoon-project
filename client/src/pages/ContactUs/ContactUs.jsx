import { useState } from "react";
import "./contactUs.css";

const ContactUs = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="container my-11 mx-auto">
      {/* Header is always visible */}
      <h2 className="font-extrabold text-3xl md:text-4xl pb-5 underlineR text-neutral-950 mb-6">
        تواصل <span className="text-primary relative top-1">معنا</span>
      </h2>

      {/* Iframe wrapper with loader */}
      <div className="relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10 ">
            <div className="loader "></div>
          </div>
        )}
        <iframe
          src={import.meta.env.VITE_Form_Facade_URL}
          width="100%"
          height={`${loading ? "88vh" : "1100px"}`}
          frameBorder="0"
          marginWidth="0"
          marginHeight="0"
          onLoad={() => setLoading(false)}
          className="mt-14"
        />
      </div>
    </div>
  );
};

export default ContactUs;
