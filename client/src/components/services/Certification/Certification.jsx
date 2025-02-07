import { Helmet } from "react-helmet";
import { ORG_NAME } from "../../../lib/constants";
import InfoCard from "../../../utils/InfoCard";

function Certification() {
  const CertificationServices = [
    "تحقق من صحة الشهادات الأكاديمية والمهنية",
    "تحقق من صحة الوثائق والشهادات المطلوبة لتوظيف الموظفين",
    "خدمات التحقق من الهوية والخلفية",
    "تحقق من صحة المعلومات المطلوبة لاتخاذ القرارات التجارية",
  ];

  return (
    <>
      <Helmet>
        <title>التحقق من الشهادات | {ORG_NAME}</title>
        <meta
          name="description"
          content="خدمات التحقق من صحة الشهادات الأكاديمية والمهنية، الوثائق المطلوبة لتوظيف الموظفين، والتحقق من الهوية والخلفية لتسهيل اتخاذ القرارات التجارية بمؤسسة شباب قادرون."
        />

        <meta
          name="keywords"
          content="التحقق من الشهادات, شهادات أكاديمية, شهادات مهنية, توظيف الموظفين, التحقق من الهوية, التحقق من الخلفية, قرارات تجارية"
        />

        <meta property="og:title" content={`التحقق من الشهادات | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content="خدمات التحقق من صحة الشهادات الأكاديمية والمهنية، الوثائق المطلوبة لتوظيف الموظفين، والتحقق من الهوية والخلفية لتسهيل اتخاذ القرارات التجارية بمؤسسة شباب قادرون."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content={window.location.href} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`التحقق من الشهادات | ${ORG_NAME}`} />
        <meta
          name="twitter:description"
          content="خدمات التحقق من صحة الشهادات الأكاديمية والمهنية، الوثائق المطلوبة لتوظيف الموظفين، والتحقق من الهوية والخلفية لتسهيل اتخاذ القرارات التجارية بمؤسسة شباب قادرون."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Helmet>

      <InfoCard
        title="التحقق من الشهادات"
        subtitle="خدمات التحقق"
        programs={CertificationServices}
        imageSrc="/images/pyramids.jpg"
      />
    </>
  );
}

export default Certification;
