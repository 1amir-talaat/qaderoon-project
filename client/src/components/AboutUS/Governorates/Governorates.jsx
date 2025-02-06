import { Helmet } from "react-helmet";
import { ORG_NAME } from "../../../lib/constants";

function Governorates() {
  const governorates = [
    "محافظة القاهرة",
    "محافظة الجيزة",
    "محافظة الاسكندرية",
    "محافظة الشرقية",
    "محافظة أسوان",
    "محافظة البحيرة",
    "محافظة الوادى الجديد",
    "محافظة قنا",
    "محافظة المنيا",
    "محافظة أسيوط",
    "محافظة الفيوم",
    "محافظة سوهاج",
    "محافظة الأقصر",
    "محافظة قنا",
    "محافظة بنى سويف",
    "محافظة السويس",
    "محافظة المنوفية",
  ];

  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        {/* Page Title */}
        <title>{ORG_NAME} | المحافظات</title>
        {/* Page Description */}
        <meta
          name="description"
          content="تعرف على المحافظات التي يتواجد بها شباب قادرون في جميع أنحاء مصر، وانضم إلينا لدعم رسالتنا."
        />
        {/* Keywords for SEO */}
        <meta
          name="keywords"
          content="محافظات مصر, مؤسسة شباب قادرون, القاهرة, الجيزة, الاسكندرية, الشرقية, أسوان, سوهاج, المنيا, الفيوم, الأقصر"
        />

        {/* Open Graph for social media */}
        <meta property="og:title" content={`المحافظات - ${ORG_NAME}`} />
        <meta
          property="og:description"
          content="استكشف أماكن تواجد شباب قادرون في مختلف المحافظات المصرية."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`المحافظات - ${ORG_NAME}`} />
        <meta
          name="twitter:description"
          content="تعرف على المحافظات التي يتواجد بها شباب قادرون."
        />
        <meta name="twitter:image" content="/images/twitter-governorates.jpg" />
      </Helmet>

      <div
        data-aos="fade-down"
        className="container mx-auto my-10 px-6 py-5 lg:my-20">
        <h2 className="underlineR mb-8 text-center text-2xl font-extrabold text-gray-900 md:pb-6 md:text-4xl">
          محافظات تواجد{" "}
          <span className="relative text-primary">شباب قادرون</span>
        </h2>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-5">
          {governorates.map((governorate, index) => (
            <div
              data-aos="fade-down"
              key={index}
              className="transform cursor-default rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg md:shadow-md">
              <h3 className="text-center text-lg font-semibold text-primary md:text-xl">
                {governorate}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Governorates;
