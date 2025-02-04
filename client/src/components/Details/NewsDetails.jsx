import { HOST_SERVER } from "../../lib/constants";
import MarkdownParser from "../MarkdownParser/MarkdownParser";

const NewsDetails = ({ news }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-4 md:mb-0 w-full lg:max-w-screen-lg max-w-screen mx-auto relative h-full aspect-video hover:scale-105 transition-transform duration-500 cursor-default">
        <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black" />
        <img
          loading="lazy"
          src={news.newsImg ? `${HOST_SERVER}/imgs/${news.newsImg}` : ""}
          className="absolute left-0 top-0 w-full h-full z-0 object-cover bg-black"
          alt={news.newsTitle}
        />

        {/* News Header */}
        <div className="p-4 absolute bottom-0 left-0 z-20 w-full">
          <h2 className="md:text-4xl text-lg font-semibold text-white leading-tight">
            {news.newsTitle}
          </h2>

          {/* Author Info */}
          <div className="flex mt-3">
            <div className="md:ml-3 ml-0 w-full flex justify-between items-center sm:block">
              {/* Date */}
              <p className="mt-2 font-semibold text-white text-sm w-fit justify-self-left sm:justify-self-auto">
                نشر في {new Date(news.createdAt).toLocaleDateString("Ar-eg")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* News Content */}
      <div className="px-4 lg:px-0 mt-12 pb-12 text-gray-700 lg:max-w-screen-lg w-full mx-auto text-lg">
        <div className="md:text-justify">
          <MarkdownParser content={news.newsDesc} />
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
