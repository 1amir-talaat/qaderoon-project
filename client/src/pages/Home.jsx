import { Helmet } from "react-helmet-async";
import EgyptVision from "../components/home/EgyptVision/EgyptVision";
import HomeLandingSlider from "../components/home/LandingSlider/HomeLandingSlider";
import SponsorsSlider from "../components/home/SponsersSliders/SponsersSliders";
import AboutSectionComponent from "../components/home/about-section/AboutSectionComponent";
import ActivitiesCard from "../components/home/activities-section/ActivitiesCard";
import Articles from "../components/home/articles-section/Articles";
import StatisticsSection from "../components/home/statistics-section/StatisticsSection";
import { ORG_NAME } from "../lib/constants";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{ORG_NAME} | الصفحة الرئيسية</title>
        <meta
          name="description"
          content="مؤسسة شباب قادرون، مؤسسة مجتمع مدني شبابية تطوعية مشهرة برقم 11492 لسنة 2022 بوزارة التضامن الاجتماعي. عضو الجمعية العمومية لاتحاد المؤسسات الشبابية بوزارة الشباب والرياضة تحت رعاية الوزير أشرف صبحي."
        />
        <meta
          name="keywords"
          content="شباب قادرون, مؤسسة شباب قادرون, تنمية المجتمع, مصر, وزارة الشباب والرياضة"
        />
        <meta name="author" content="مؤسسة شباب قادرون" />

        {/* <!-- Open Graph Meta Tags --> */}
        <meta property="og:title" content="مؤسسة شباب قادرون" />
        <meta
          property="og:description"
          content="مؤسسة مجتمع مدني شبابية تطوعية مشهرة برقم 11492 لسنة 2022 بوزارة التضامن الاجتماعي."
        />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content="https://qyf-eg.org" />
        <meta property="og:type" content="website" />

        {/* <!-- Twitter Card Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="مؤسسة شباب قادرون" />
        <meta
          name="twitter:description"
          content="عضو الجمعية العمومية لاتحاد المؤسسات الشبابية بوزارة الشباب والرياضة تحت رعاية الوزير أشرف صبحي."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
        <meta name="twitter:site" content="@qaderoon492" />
      </Helmet>
      <main>
        <HomeLandingSlider />
        <AboutSectionComponent />
        <Articles />
        <ActivitiesCard />
        <StatisticsSection />
        <EgyptVision />
        <SponsorsSlider />
      </main>
    </>
  );
};

export default Home;
