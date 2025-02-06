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
          content={`${article.title.slice(
            0,
            150,
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
          content={`${article.title.slice(
            0,
            150,
          )}... اكتشف المقال بالكامل على موقع ${ORG_NAME}.`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={
            article.Img ?
              `${HOST_SERVER}/imgs/${article.Img}`
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
          content={`${article.title.slice(
            0,
            150,
          )}... المزيد على موقع ${ORG_NAME}.`}
        />
        <meta
          name="twitter:image"
          content={
            article.Img ?
              `${HOST_SERVER}/imgs/${article.Img}`
            : "/images/twitter-card.jpg"
          }
        />
      </Helmet>
      {/* Hero Section */}
      <div className="relative mx-auto mb-4 aspect-video h-full w-full max-w-screen cursor-default transition-transform duration-500 md:mb-0 md:max-w-screen-lg lg:hover:scale-105">
        <div className="absolute bottom-0 left-0 z-10 h-full w-full bg-gradient-to-b from-transparent to-black" />
        <img
          loading="lazy"
          src={article.Img ? `${HOST_SERVER}/imgs/${article.Img}` : ""}
          className="absolute top-0 left-0 z-0 h-full w-full bg-black object-cover"
          alt={article.title}
        />

        {/* Article Header */}
        <div className="absolute bottom-0 left-0 z-20 w-full p-4">
          <h2 className="text-lg leading-tight font-semibold text-white md:text-2xl lg:text-3xl">
            {article.title}
          </h2>

          {/* Author Info */}
          <div className="mt-3 flex">
            <div className="ml-0 flex w-full items-center justify-between sm:block md:ml-3">
              <p className="mb-3 text-base font-semibold text-gray-200 md:text-lg">
                <span>بقلم </span>
                {article.author.name}
              </p>
              <pre className="hidden w-full text-sm font-semibold text-gray-200 md:block md:text-base">
                {article.author.title}
              </pre>
              {/* Date */}
              <p className="justify-self-left mt-2 w-fit text-sm font-semibold text-white sm:justify-self-auto">
                نشر في {new Date(article.createdAt).toLocaleDateString("Ar-eg")}
              </p>
            </div>
            <img
              loading="lazy"
              src={
                article.author?.image ?
                  `${HOST_SERVER}/imgs/${article.author?.image}`
                : `/images/profile.png`
              }
              className="hidden size-16 rounded-full object-cover sm:block lg:size-24"
              alt={article.author.name}
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <MarkdownParser content={article.content} />
    </>
  );
};

export default ArticleDetails;
