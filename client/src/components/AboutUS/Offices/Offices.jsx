import AdministrativeOffice from "./AdministrativeOffice";
import ExecutiveOffice from "./ExecutiveOffice";
import TechnicalOffice from "./TechnicalOffice";
import { Helmet } from "react-helmet";
import { ORG_NAME } from "../../../lib/constants";

function Offices() {
  return (
    <>
      <Helmet>
        <title>{ORG_NAME} | المكاتب</title>
        <meta
          name="description"
          content="اكتشف المزيد عن مكاتب مؤسسة شباب قادرون المنتشرة، التي تدعم وتساهم في تمكين الشباب في مختلف المناطق."
        />
        <meta
          name="keywords"
          content="مكاتب, مؤسسة شباب قادرون, تمكين الشباب, مكاتبنا, دعم"
        />
        <meta property="og:title" content={`المكاتب | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content="تعرف على مكاتب مؤسسة شباب قادرون في مختلف الأماكن التي تعمل على تحقيق أهدافنا التنموية."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`المكاتب | ${ORG_NAME}`} />
        <meta
          name="twitter:description"
          content="اكتشف مكاتب مؤسسة شباب قادرون التي تساهم في تحقيق التغيير وتمكين الشباب."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Helmet>

      <div className="w-full mx-auto px-4 md:px-10 lg:px-20 my-16 text-gray-900">
        {/* المكتب الإداري */}
        <AdministrativeOffice />

        {/* المكتب التنفيذي */}
        <ExecutiveOffice />

        {/* المكتب الفني */}
        <TechnicalOffice />
      </div>
    </>
  );
}

export default Offices;
