import { Helmet } from "react-helmet";
import InfoCard from "../../../utils/InfoCard";
import { ORG_NAME } from "../lib/constants";

function Conferences() {
  const conferenceServices = [
    "تنظيم مؤتمرات وندوات في مجالات متنوعة",
    "خدمات التخطيط والتنظيم للمؤتمرات والندوات",
    "تأمين المتحدثين والخبراء في مختلف المجالات",
    "خدمات الإدارة والتنسيق للمؤتمرات والندوات",
  ];

  return (
    <>
      <Helmet>
        <title>المؤتمرات والندوات | {ORG_NAME}</title>
        <meta
          name="description"
          content="خدمات متكاملة لتنظيم المؤتمرات والندوات، تشمل التخطيط، التنظيم، تأمين المتحدثين والإدارة الفعالة لضمان نجاح الفعاليات بمؤسسة شباب قادرون."
        />
        
        <meta
          name="keywords"
          content="المؤتمرات, الندوات, تنظيم المؤتمرات, تخطيط المؤتمرات, تأمين المتحدثين, تنسيق الفعاليات, إدارة المؤتمرات"
        />

        <meta property="og:title" content={`المؤتمرات والندوات | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content="خدمات متكاملة لتنظيم المؤتمرات والندوات، تشمل التخطيط، التنظيم، تأمين المتحدثين والإدارة الفعالة لضمان نجاح الفعاليات بمؤسسة شباب قادرون."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content={window.location.href} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`المؤتمرات والندوات | ${ORG_NAME}`} />
        <meta
          name="twitter:description"
          content="خدمات متكاملة لتنظيم المؤتمرات والندوات، تشمل التخطيط، التنظيم، تأمين المتحدثين والإدارة الفعالة لضمان نجاح الفعاليات بمؤسسة شباب قادرون."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Helmet>

      <InfoCard
        title="المؤتمرات والندوات"
        subtitle="حلول متكاملة"
        programs={conferenceServices}
        imageSrc="/images/pyramids.jpg"
      />
    </>
  );
}

export default Conferences;
