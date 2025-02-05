import { useState } from "react";
import "./contactUs.css";
import Loader from "../../utils/Loader/Loader";
import { ORG_NAME } from "../../lib/constants";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Helmet>
        <title>تواصل معنا | {ORG_NAME}</title>
        <meta
          name="description"
          content="تواصل معنا في مؤسسة شباب قادرون. نحن هنا للإجابة على استفساراتك وتقديم الدعم الذي تحتاجه. اتصل بنا الآن!"
        />
        <meta
          name="keywords"
          content="تواصل معنا, استفسارات, دعم, مؤسسة شباب قادرون, الاتصال"
        />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={`تواصل معنا | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content="لديك استفسار أو تحتاج إلى مساعدة؟ نحن هنا لمساعدتك في مؤسسة شباب قادرون. لا تتردد في التواصل معنا!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`تواصل معنا | ${ORG_NAME}`} />
        <meta
          name="twitter:description"
          content="اتصل بنا لمعرفة المزيد عن خدماتنا أو للحصول على دعم مباشر."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Helmet>
      <div className="container my-11 mx-auto">
        {/* Header is always visible */}
        <h2 className="font-extrabold text-3xl md:text-4xl pb-5 underlineR text-neutral-950 mb-6">
          تواصل <span className="text-primary relative top-1">معنا</span>
        </h2>

        {/* Iframe wrapper with loader */}
        <div className="relative">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10 ">
              <Loader />
            </div>
          )}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeor2YS6HeXAF_MSmBN1zSR162Ayf-7NdMG1Sil017E-wZCYg/viewform?embedded=true"
            width="100%"
            height={`${loading ? "88vh" : "1100px"}`}
            onLoad={() => setLoading(false)}
            className="mt-14"
          />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
