import { Helmet } from "react-helmet";
import { HOST_SERVER, ORG_NAME } from "../../lib/constants";
import MarkdownParser from "../MarkdownParser/MarkdownParser";

const NewsDetails = ({ news }) => {
  return (
    <>
      <Helmet>
        <title>
          {news.newsTitle} | {ORG_NAME}
        </title>
        <meta
          name="description"
          content={`${news.newsTitle.slice(
            0,
            150,
          )}... اكتشف الخبر بالكامل على موقع ${ORG_NAME}.`}
        />
        <meta
          name="keywords"
          content={`أخبار, ${news.newsTitle}, ${ORG_NAME}`}
        />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={`${news.newsTitle} | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content={`${news.newsTitle.slice(
            0,
            150,
          )}... اكتشف الخبر بالكامل على موقع ${ORG_NAME}.`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={
            news.newsImg ?
              `${HOST_SERVER}/imgs/${news.newsImg}`
            : "/images/og-banner.jpg"
          }
        />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta
          name="twitter:title"
          content={`${news.newsTitle} | ${ORG_NAME}`}
        />
        <meta
          name="twitter:description"
          content={`${news.newsTitle.slice(
            0,
            150,
          )}... اكتشف الخبر بالكامل على موقع ${ORG_NAME}.`}
        />
        <meta
          name="twitter:image"
          content={
            news.newsImg ?
              `${HOST_SERVER}/imgs/${news.newsImg}`
            : "/images/twitter-card.jpg"
          }
        />
      </Helmet>
      {/* Hero Section */}
      <div className="relative mx-auto mb-4 aspect-video h-full w-full max-w-screen cursor-default transition-transform duration-500 hover:scale-105 md:mb-0 lg:max-w-screen-lg">
        <div className="absolute bottom-0 left-0 z-10 h-full w-full bg-gradient-to-b from-transparent to-black" />
        <img
          loading="lazy"
          src={news.newsImg ? `${HOST_SERVER}/imgs/${news.newsImg}` : ""}
          className="absolute top-0 left-0 z-0 h-full w-full bg-black object-cover"
          alt={news.newsTitle}
        />

        {/* News Header */}
        <div className="absolute bottom-0 left-0 z-20 w-full p-4">
          <h2 className="text-lg leading-tight font-semibold text-white md:text-4xl">
            {news.newsTitle}
          </h2>

          {/* Author Info */}
          <div className="mt-3 flex">
            <div className="ml-0 flex w-full items-center justify-between sm:block md:ml-3">
              {/* Date */}
              <p className="justify-self-left mt-2 w-fit text-sm font-semibold text-white sm:justify-self-auto">
                نشر في {new Date(news.createdAt).toLocaleDateString("Ar-eg")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* News Content */}
      <div className="mx-auto mt-12 w-full px-4 pb-12 text-lg text-gray-700 lg:max-w-screen-lg lg:px-0">
        <div className="md:text-justify">
          <MarkdownParser content={news.newsDesc} />
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
