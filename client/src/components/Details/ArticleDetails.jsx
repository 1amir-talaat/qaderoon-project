import { Helmet } from "react-helmet";
import { HOST_SERVER, ORG_NAME } from "../../lib/constants";
import MarkdownParser from "../MarkdownParser/MarkdownParser";

const ArticleDetails = ({ article }) => {
  return (
    <>
      <Helmet>
        <title>
          {article.title} | {ORG_NAME}
        </title>
        <meta
          name="description"
          content={`${article.content.slice(
            0,
            150
          )}... اقرأ المزيد على موقع ${ORG_NAME}.`}
        />
        <meta
          name="keywords"
          content={`مقالات, ${article.title}, ${article.author.name}, ${ORG_NAME}`}
        />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={`${article.title} | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content={`${article.content.slice(
            0,
            150
          )}... اكتشف المقال بالكامل على موقع ${ORG_NAME}.`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={
            article.Img
              ? `${HOST_SERVER}/imgs/${article.Img}`
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
          content={`${article.content.slice(
            0,
            150
          )}... المزيد على موقع ${ORG_NAME}.`}
        />
        <meta
          name="twitter:image"
          content={
            article.Img
              ? `${HOST_SERVER}/imgs/${article.Img}`
              : "/images/twitter-card.jpg"
          }
        />
      </Helmet>
      {/* Hero Section */}
      <div className="mb-4 md:mb-0 w-full lg:max-w-screen-lg max-w-screen mx-auto relative h-full aspect-video hover:scale-105 transition-transform duration-500 cursor-default">
        <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black" />
        <img
          loading="lazy"
          src={article.Img ? `${HOST_SERVER}/imgs/${article.Img}` : ""}
          className="absolute left-0 top-0 w-full h-full z-0 object-cover bg-black"
          alt={article.title}
        />

        {/* Article Header */}
        <div className="p-4 absolute bottom-0 left-0 z-20 w-full">
          <h2 className="md:text-4xl text-lg font-semibold text-white leading-tight">
            {article.title}
          </h2>

          {/* Author Info */}
          <div className="flex mt-3">
            <div className="md:ml-3 ml-0 w-full flex justify-between items-center sm:block">
              <p className="font-semibold text-gray-200 text-base md:text-lg mb-3">
                <span>بقلم </span>
                {article.author.name}
              </p>
              <pre className="font-semibold text-gray-200 w-full text-sm md:text-base hidden md:block">
                {article.author.title}
              </pre>
              {/* Date */}
              <p className="mt-2 font-semibold text-white text-sm w-fit justify-self-left sm:justify-self-auto">
                نشر في {new Date(article.createdAt).toLocaleDateString("Ar-eg")}
              </p>
            </div>
            <img
              loading="lazy"
              src={
                article.author?.image
                  ? `${HOST_SERVER}/imgs/${article.author?.image}`
                  : `/images/profile.png`
              }
              className="md:size-24 size-16 rounded-full object-cover hidden sm:block"
              alt={article.author.name}
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="px-4 lg:px-0 mt-12 pb-12 text-gray-700 lg:max-w-screen-lg w-full mx-auto text-lg">
        <div className="md:text-justify">
          <MarkdownParser content={article.content} />
        </div>
      </div>
    </>
  );
};

export default ArticleDetails;
