import { useState } from "react";
import "./Join.css";
import Loader from "../../utils/Loader/Loader";
import { Helmet } from "react-helmet";
import { ORG_NAME } from "../../lib/constants";

const JoinUs = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Helmet>
        <title>إنضم إلينا | {ORG_NAME}</title>
        <meta
          name="description"
          content="انضم إلى فريق عملنا في مؤسسة شباب قادرون. اكتشف فرص التعاون والمشاركة في صناعة التغيير."
        />
        <meta
          name="keywords"
          content="إنضم إلينا, فرص عمل, تعاون, مؤسسة شباب قادرون, تطوير"
        />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={`إنضم إلينا | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content="انضم إلى فريق عملنا في مؤسسة شباب قادرون. اكتشف فرص التعاون والمشاركة في صناعة التغيير."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`إنضم إلينا | ${ORG_NAME}`} />
        <meta
          name="twitter:description"
          content="كن جزءًا من فريقنا وساهم في إحداث تأثير إيجابي معنا."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Helmet>
      <div className="container my-11 mx-auto">
        {/* Header is always visible */}
        <h2 className="font-extrabold text-3xl md:text-4xl pb-5 underlineR text-neutral-950 mb-6">
          إنضم <span className="text-primary relative top-1">إلينا</span>
        </h2>

        {/* Iframe wrapper with loader */}
        <div className="relative">
          {loading && (
            <div className="absolute overflow-hidden flex items-center justify-center bg-white z-10 w-full h-[50vh]">
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
    </>
  );
};

export default JoinUs;
