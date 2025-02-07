import { Helmet } from "react-helmet";
import InfoCard from "../../../utils/InfoCard";
import { ORG_NAME } from "../lib/constants"; // Assuming ORG_NAME is defined here

function ActivitiesCard() {
  const trainingPrograms = [
    "برنامج شباب قادرون للتأهيل لسوق العمل",
    "منحة شباب قادرون للقيادة والريادة",
    "دبلومة ريادة الأعمال",
    "زمالة شباب قادرون لبناء قدرات المجتمع المدني",
    "برنامج تأهيل الكوادر البشرية للعمل العام",
    "التسويق الرقمي وإدارة العلامات التجارية",
    "برامج التأهيل المهنى والتقنى",
  ];

  return (
    <>
      <Helmet>
        <title>أنشطة المؤسسة | {ORG_NAME}</title>
        
        <meta
          name="description"
          content="تعرف على الانشطة التي تقوم بها مؤسسة شباب قادرون لتأهيل الشباب لسوق العمل وبناء قدرات المجتمع المدني."
        />
        
        <meta
          name="keywords"
          content="أنشطة المؤسسة, برامج تدريبية, شباب قادرون, تأهيل لسوق العمل, ريادة الأعمال, بناء قدرات المجتمع المدني"
        />
        <meta property="og:title" content={`أنشطة المؤسسة | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content="تعرف على الانشطة التي تقوم بها مؤسسة شباب قادرون لتأهيل الشباب لسوق العمل وبناء قدرات المجتمع المدني."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`أنشطة المؤسسة | ${ORG_NAME}`} />
        <meta
          name="twitter:description"
          content="تعرف على الانشطة التي تقوم بها مؤسسة شباب قادرون لتأهيل الشباب لسوق العمل وبناء قدرات المجتمع المدني."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Helmet>
      <InfoCard
        title="أنشطة المؤسسة"
        subtitle="البرامج التدريبية"
        programs={trainingPrograms}
        imageSrc="/images/ac-pic.png"
      />
    </>
  );
}

export default ActivitiesCard;