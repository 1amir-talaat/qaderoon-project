import { Helmet } from "react-helmet-async";
import { HOST_SERVER, ORG_NAME } from "../../lib/constants";
import { StringLimit } from "../../lib/utils";
import MarkdownParser from "../MarkdownParser/MarkdownParser";
import AuthorDetails from "./AuthorDetails";
import HeroSection from "./HeroSection";

const NewsDetails = ({ news }) => {
  return (
    <>
      <Helmet>
        <title>
          {news.title} | {ORG_NAME}
        </title>
        <meta
          name="description"
          content={StringLimit(
            150,
            `${news.title} إكتشف الخبر بالكامل على موقع مؤسسة ${ORG_NAME} ...`,
          )}
        />
        <meta name="keywords" content={`أخبار, ${news.title}, ${ORG_NAME}`} />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={`${news.title} | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content={StringLimit(
            150,
            `${news.title} إكتشف الخبر بالكامل على موقع مؤسسة ${ORG_NAME} ...`,
          )}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={
            news.img ?
              `${HOST_SERVER}/imgs/${news.img}`
            : "/images/og-banner.jpg"
          }
        />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`${news.title} | ${ORG_NAME}`} />
        <meta
          name="twitter:description"
          content={StringLimit(
            150,
            `${news.title} إكتشف الخبر بالكامل على موقع مؤسسة ${ORG_NAME} ...`,
          )}
        />
        <meta
          name="twitter:image"
          content={
            news.img ?
              `${HOST_SERVER}/imgs/${news.img}`
            : "/images/twitter-card.jpg"
          }
        />
      </Helmet>

      <HeroSection item={news}>
        <AuthorDetails item={news} />
      </HeroSection>

      {/* News Content */}
      <MarkdownParser content={news.content} />
    </>
  );
};

export default NewsDetails;
