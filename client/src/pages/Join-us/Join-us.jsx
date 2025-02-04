import { useState } from "react";
import "./Join.css";
import Loader from "../../utils/Loader/Loader";

const JoinUs = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="container my-11 mx-auto">
      {/* Header is always visible */}
      <h2 className="font-extrabold text-3xl md:text-4xl pb-5 underlineR text-neutral-950 mb-6">
        إنضم <span className="text-primary relative top-1">إلينا</span>
      </h2>

      {/* Iframe wrapper with loader */}
      <div className="relative">
        {loading && (
          <div className="absolute overflow-hidden debug flex items-center justify-center bg-white z-10 w-full h-[50vh]">
            <Loader />
          </div>
        )}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdv06KwWuqnhgPUiu2pRHGm0lvUQsLsVymBN6VyAs0RYNwJhw/viewform?embedded=true"
          width="100%"
          style={{ height: loading ? "50vh" : "3000px" }}
          onLoad={() => setLoading((prev) => !prev)}
          className="mt-14"
        />
      </div>
    </div>
  );
};

export default JoinUs;
