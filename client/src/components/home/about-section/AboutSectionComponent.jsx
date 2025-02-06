import ContentSection from "./ContentSection";
import Header from "./Header";
import ImageSection from "./ImageSection";

const AboutSectionComponent = () => {
  return (
    <section className="container mx-auto my-10 flex items-center rounded-xl p-6 lg:my-20 lg:flex-row lg:gap-6">
      <div className="lg:w-1/2">
        <Header />
        <ContentSection />
      </div>
      <div className="lg:w-1/2">
        <ImageSection />
      </div>
    </section>
  );
};

export default AboutSectionComponent;
