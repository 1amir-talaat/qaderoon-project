/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import { ORG_NAME } from "../lib/constants";

const SEO_Example = () => {
  return (
    <>
      {/* Helmet is the container for the metadata */}
      <Helmet>
        {/* page title */}
        <title>إضافة مقالة جديدة | {ORG_NAME}</title>
        {/* page description */}
        <meta
          name="description"
          content="صفحة إضافة مقال جديد إلى موقع مؤسسة شباب قادرون. يمكنك كتابة عنوان المقال، اختيار الكاتب، وإدخال محتوى المقال."
        />
        {/* some keywords */}
        <meta
          name="keywords"
          content="إضافة مقال, مؤسسة شباب قادرون, لوحة التحكم, مقالات جديدة, كاتب المقال"
        />

        {/* Open Graph tags for social sharing */}
        {/* og:title same as page title */}
        <meta property="og:title" content={`إضافة مقالة جديدة | ${ORG_NAME}`} />
        {/* og-desc is shorter than page desc */}
        <meta
          property="og:description"
          content="قم بإضافة مقال جديد إلى موقع مؤسسة شباب قادرون بسهولة."
        />
        {/* content is page dependant, choose article for the most part */}
        <meta property="og:type" content="website" />
        {/* if the page has a meaningful image put it else leave it as is */}
        <meta property="og:image" content="/images/og-banner.jpg" />
        {/* constant part */}
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card tags */}
        {/* constant part */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* constant part */}
        <meta name="twitter:site" content="@qaderoon492" />
        {/* same as og:title and page title */}
        <meta name="twitter:title" content={`إضافة مقال جديد | ${ORG_NAME}`} />
        {/* can be the same as og:title */}
        <meta
          name="twitter:description"
          content="أضف مقالات جديدة لموقع مؤسسة شباب قادرون بسهولة."
        />
        {/* if the page has a meaningful image put it else leave it as is */}
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Helmet>
    </>
  );
};
