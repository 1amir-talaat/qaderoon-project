import { Helmet } from "react-helmet-async";
import { ORG_NAME } from "../../../lib/constants";
import Cards from "./Cards";
import ContentOne from "./ContentOne";
import Header2 from "./Header2";
import HeaderWho from "./HearderWho";

const Whowe = () => {
  return (
    <>
      <Helmet>
        <title>{ORG_NAME} | من نحن</title>
        <meta
          name="description"
          content="تعرف على مؤسسة شباب قادرون ورؤيتنا وأهدافنا في تمكين الشباب والمجتمع."
        />
        <meta
          name="keywords"
          content="من نحن, مؤسسة شباب قادرون, رؤيتنا, أهدافنا, تمكين الشباب"
        />
        <meta property="og:title" content={`من نحن | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content="اكتشف المزيد عن مؤسسة شباب قادرون ورؤيتنا لمستقبل مشرق."
        />

        {/* Open Graph tags for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`من نحن | ${ORG_NAME}`} />
        <meta
          name="twitter:description"
          content="تعرف على مؤسسة شباب قادرون ورسالتنا في دعم الشباب."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Helmet>

      <section className="container mx-auto my-6 items-center gap-6 rounded-xl p-6 lg:my-20">
        <HeaderWho />
        <ContentOne />
      </section>
      <section className="container mx-auto my-6 items-center gap-6 rounded-xl p-6 lg:my-20">
        <Header2 />
        <Cards />
      </section>
    </>
  );
};

export default Whowe;
