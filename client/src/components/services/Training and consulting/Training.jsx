import { Helmet } from "react-helmet";
import { ORG_NAME } from "../../../lib/constants";
import InfoCard from "../../../utils/InfoCard";

function Training() {
  const trainingPrograms = [
    "برامج تدريبية تفاعلية وممتعة",
    "تدريب على استخدام التكنولوجيا الحديثة",
    "برامج تدريبية للقيادة والادارة",
    "تدريب على مهارات الاتصال والتفاوض",
  ];

  return (
    <>
      <Helmet>
        <title>التدريب والاستشارات | {ORG_NAME}</title>
        <meta
          name="description"
          content="برامج تدريبية متكاملة تشمل القيادة، التكنولوجيا الحديثة، مهارات الاتصال، والتفاوض لضمان تطوير المهارات وتحقيق النجاح المهني بمؤسسة شباب قادرون."
        />

        <meta
          name="keywords"
          content="التدريب, الاستشارات, القيادة, التكنولوجيا الحديثة, مهارات الاتصال, التفاوض, تطوير المهارات"
        />

        <meta property="og:title" content={`التدريب والاستشارات | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content="برامج تدريبية متكاملة تشمل القيادة، التكنولوجيا الحديثة، مهارات الاتصال، والتفاوض لضمان تطوير المهارات وتحقيق النجاح المهني بمؤسسة شباب قادرون."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content={window.location.href} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`التدريب والاستشارات | ${ORG_NAME}`} />
        <meta
          name="twitter:description"
          content="برامج تدريبية متكاملة تشمل القيادة، التكنولوجيا الحديثة، مهارات الاتصال، والتفاوض لضمان تطوير المهارات وتحقيق النجاح المهني بمؤسسة شباب قادرون."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Helmet>

      <InfoCard
        title="التدريب و الاستشارات"
        subtitle="التدريب"
        programs={trainingPrograms}
        imageSrc="/images/pyramids.jpg"
      />
    </>
  );
}

export default Training;
