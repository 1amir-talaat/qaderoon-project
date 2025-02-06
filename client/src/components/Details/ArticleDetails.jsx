import { Helmet } from "react-helmet";
import { HOST_SERVER, ORG_NAME } from "../../lib/constants";
import { StringLimit } from "../../lib/utils";
import MarkdownParser from "../MarkdownParser/MarkdownParser";
import AuthorDetails from "./AuthorDetails";
import HeroSection from "./HeroSection";

const ArticleDetails = ({ article }) => {
  return (
    <>
      <Helmet>
        <title>
          {article.title} | {ORG_NAME}
        </title>
        <meta
          name="description"
          content={StringLimit(
            150,
            `${article.title} إكتشف المقال بالكامل على موقع مؤسسة ${ORG_NAME} ...`,
          )}
        />
        <meta
          name="keywords"
          content={`مقالات, ${article.title}, ${article.author.name}, ${ORG_NAME}`}
        />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={`${article.title} | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content={StringLimit(
            150,
            `${article.title} إكتشف المقال بالكامل على موقع مؤسسة ${ORG_NAME} ...`,
          )}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={
            article.img ?
              `${HOST_SERVER}/imgs/${article.img}`
            : "/images/og-banner.jpg"
          }
        />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`${article.title} | ${ORG_NAME}`} />
        <meta
          name="twitter:description"
          content={StringLimit(
            150,
            `${article.title} إكتشف المقال بالكامل على موقع مؤسسة ${ORG_NAME} ...`,
          )}
        />
        <meta
          name="twitter:image"
          content={
            article.img ?
              `${HOST_SERVER}/imgs/${article.img}`
            : "/images/twitter-card.jpg"
          }
        />
      </Helmet>

      <HeroSection item={article}>
        <AuthorDetails item={article} />
      </HeroSection>

      {/* Article Content */}
      <MarkdownParser content={article.content} />
    </>
  );
};

export default ArticleDetails;
