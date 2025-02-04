import HomeLandingSlider from "../components/home/LandingSlider/HomeLandingSlider";
import AboutSectionComponent from "../components/home/about-section/AboutSectionComponent";
import Articles from "../components/home/articles-section/Articles";
import ActivitiesCard from "../components/home/activities-section/ActivitiesCard";
import StatisticsSection from "../components/home/statistics-section/StatisticsSection";
import EgyptVision from "../components/home/EgyptVision/EgyptVision";
import SponsorsSlider from "../components/home/SponsersSliders/SponsersSliders";

const Home = () => {
  return (
    <>
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
