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
import { Helmet } from "react-helmet-async";
import { ORG_NAME } from "../../../lib/constants";

const SuccessPartners = () => {
  return (
    <>
      <Helmet>
        <title>{ORG_NAME} | شركاء النجاح </title>
        <meta
          name="description"
          content="تعرف على شركاء النجاح الذين يدعمون مؤسسة شباب قادرون في تحقيق أهدافها. هؤلاء الشركاء المتميزون يقدمون الدعم المستمر للمؤسسة لتحقيق مستقبل أفضل للشباب."
        />
        <meta
          name="keywords"
          content="شركاء النجاح, مؤسسة شباب قادرون, تمكين الشباب, تعاون, دعم"
        />
        <meta property="og:title" content={`شركاء النجاح | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content="اكتشف المزيد عن شركاء النجاح الذين يدعمون مؤسسة شباب قادرون في مشاريعها التنموية."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`شركاء النجاح | ${ORG_NAME}`} />
        <meta
          name="twitter:description"
          content="تعرف على شركاء النجاح الذين يساهمون في تمكين الشباب وتحقيق التغيير."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Helmet>

      <div className="mx-auto my-12 w-full px-4 md:px-10 lg:px-20">
        <h2 className="underlineR mb-8 pb-4 text-center text-2xl font-extrabold text-neutral-950 md:text-4xl">
          شركاء <span className="relative top-1 text-primary">النجاح</span>
        </h2>

        <div className="grid cursor-pointer grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 md:gap-8 lg:grid-cols-6">
          {sponsors.map((sponsor) => (
            <div
              data-aos="fade-down"
              key={sponsor.id}
              className="flex flex-col items-center rounded-lg bg-white p-4 text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg md:p-6">
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center">
                <img
                  loading="lazy"
                  src={`/images/sponsors/sponsor-${sponsor.id}.png`}
                  alt={sponsor.name}
                  className="max-h-20 w-full object-contain sm:max-h-24 md:max-h-28 lg:max-h-32"
                />
              </a>
              <p className="mt-3 text-sm font-semibold text-neutral-800 sm:text-base md:text-lg">
                {sponsor.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SuccessPartners;
