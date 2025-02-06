import AboutBroad from "./AboutBroad";
import Formating from "./Formating";
import { Missions } from "./Missions";
import { Helmet } from "react-helmet";
import { ORG_NAME } from "../../../lib/constants";

const Board = () => {
  return (
    <>
      <Helmet>
        <title>{ORG_NAME} | مجلس الأمناء </title>
        <meta
          name="description"
          content="تعرف على مجلس الأمناء في مؤسسة شباب قادرون، الهيكل القيادي الذي يوجه المؤسسة لتحقيق أهدافها التنموية."
        />
        <meta
          name="keywords"
          content="مجلس الأمناء, مؤسسة شباب قادرون, قيادة, تمكين الشباب, استراتيجية"
        />
        <meta property="og:title" content={`مجلس الأمناء | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content="اكتشف دور مجلس الأمناء في توجيه مؤسسة شباب قادرون نحو تحقيق التغيير وتمكين الشباب."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner-board.jpg" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`مجلس الأمناء | ${ORG_NAME}`} />
        <meta
          name="twitter:description"
          content="تعرف على مجلس الأمناء وكيف يسهم في تطوير استراتيجية مؤسسة شباب قادرون."
        />
        <meta name="twitter:image" content="/images/twitter-card-board.jpg" />
      </Helmet>

      <section className="mx-auto rounded-xl bg-gray-100">
        <div className="container mx-auto mb-10 px-6 py-1 pt-12 lg:py-20">
          <AboutBroad />
          <Formating />
        </div>
      </section>
      <Missions />
    </>
  );
};

export default Board;
