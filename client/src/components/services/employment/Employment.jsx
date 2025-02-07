import { Helmet } from "react-helmet-async";
import { ORG_NAME } from "../../../lib/constants";
import InfoCard from "../../../utils/InfoCard";

function Employment() {
  const EmploymentServices = [
    "خدمات التوظيف للمؤسسات والشركات",
    "البحث عن المواهب والكفاءات المطلوبة",
    "خدمات التقييم والاختيار للمتقدمين",
    "خدمات التدريب والتأهيل للموظفين الجدد",
  ];

  return (
    <>
      <Helmet>
        <title>التوظيف | {ORG_NAME}</title>
        <meta
          name="description"
          content="خدمات التوظيف الشاملة، بما في ذلك البحث عن المواهب، التقييم، والاختيار، بالإضافة إلى التدريب والتأهيل لضمان نجاح الموظفين الجدد بمؤسسة شباب قادرون."
        />

        <meta
          name="keywords"
          content="التوظيف, البحث عن المواهب, اختيار المتقدمين, التدريب والتأهيل, خدمات التوظيف, الكفاءات"
        />

        <meta property="og:title" content={`التوظيف | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content="خدمات التوظيف الشاملة، بما في ذلك البحث عن المواهب، التقييم، والاختيار، بالإضافة إلى التدريب والتأهيل لضمان نجاح الموظفين الجدد بمؤسسة شباب قادرون."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content={window.location.href} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`التوظيف | ${ORG_NAME}`} />
        <meta
          name="twitter:description"
          content="خدمات التوظيف الشاملة، بما في ذلك البحث عن المواهب، التقييم، والاختيار، بالإضافة إلى التدريب والتأهيل لضمان نجاح الموظفين الجدد بمؤسسة شباب قادرون."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Helmet>

      <InfoCard
        title="التوظيف"
        subtitle="البحث عن الكفاءات"
        programs={EmploymentServices}
        imageSrc="/images/pyramids.jpg"
      />
    </>
  );
}

export default Employment;
