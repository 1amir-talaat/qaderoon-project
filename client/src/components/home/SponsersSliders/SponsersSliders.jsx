import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./SponsersSliders.css";

const sponsors = [
  {
    id: 1,
    name: "وزارة التضامن الاجتماعي",
    link: "https://www.moss.gov.eg",
  },
  {
    id: 2,
    name: "وزارة الشباب والرياضة",
    link: "https://www.emys.gov.eg",
  },
  {
    id: 3,
    name: "اتحاد التنمية المهنية الشبابية",
    link: "https://manhom.com/شركات/اتحاد-التنمية-المهنية-الشبابية",
  },
  {
    id: 4,
    name: "مركز التحكيم العربي الدولي",
    link: "https://www.facebook.com/arbtration/?locale=ar_AR",
  },
  {
    id: 5,
    name: "جمعية الترابط الإنساني",
    link: "https://www.facebook.com/MoroccanEgyptianAssociationinegy",
  },
  {
    id: 6,
    name: "مؤسسة مهندسون من اجل مصر المستدامة",
    link: "https://ese-eg.com",
  },
  {
    id: 7,
    name: "مؤسسة شارعنا للرعاية والتنمية",
    link: "https://www.facebook.com/shr3na.eg",
  },
  {
    id: 8,
    name: "كيان شباب الوطن للريادة والتنمية",
    link: "https://www.facebook.com/shababelwatan",
  },
  {
    id: 9,
    name: "Team NTY",
    link: "https://www.facebook.com/TeamNTY.9com",
  },
  {
    id: 10,
    name: "إيجي جيت لريادة الأعمال ودعم المرأة",
    link: "https://www.facebook.com/profile.php?id=100083000097290",
  },
  {
    id: 11,
    name: "مؤسسة صعيد مصر",
    link: "https://www.facebook.com/profile.php?id=100082239436192",
  },
  {
    id: 12,
    name: "جمعية الريادة لتنمية الأعمال وسلاسل التوريد",
    link: "https://www.facebook.com/profile.php?id=100068578001391",
  },
  {
    id: 13,
    name: "شباب مستدام",
    link: "https://www.facebook.com/Mostadaminitiative",
  },
  {
    id: 14,
    name: "MTD",
    link: "#",
  },
  {
    id: 15,
    name: "American Canadian Academy",
    link: "https://www.linkedin.com/company/american-canadian-academy",
  },
  {
    id: 16,
    name: "AMIT learning",
    link: "https://amit-learning.com",
  },
  {
    id: 17,
    name: "YMCA",
    link: "https://www.ymca.int",
  },
  {
    id: 18,
    name: "Epic Academy",
    link: "https://www.facebook.com/epicacademy1",
  },
  {
    id: 19,
    name: "QYF School",
    link: "https://qyfschool.com",
  },
  {
    id: 20,
    name: "شركة فالكون للاستثمار الرياضي",
    link: "https://www.facebook.com/Falcon197/?locale=ar_AR",
  },
];

const SponsorsSlider = () => {
  return (
    <div className="sponsors-slider-container container mx-auto my-16 w-full px-3 md:px-1">
      {/* Title Section */}
      <h2 className="underlineR mb-6 pb-5 text-3xl font-extrabold text-neutral-950 md:text-4xl">
        شركاء <span className="relative top-1 text-primary">النجاح</span>
      </h2>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 50 },
        }}
        className="mySwiper mt-14">
        {sponsors.map((sponsor) => (
          <SwiperSlide className="select-none" key={sponsor.id}>
            <div className="sponsor-card flex h-full w-full flex-col items-center justify-center">
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <img
                  loading="lazy"
                  src={`/images/sponsors/sponsor-${sponsor.id}.png`}
                  alt={sponsor.name}
                  className="max-h-30 w-full object-contain"
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SponsorsSlider;
