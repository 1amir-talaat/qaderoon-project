import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Api from "../lib/Api";
import { HOST_SERVER, ORG_NAME } from "../lib/constants";
import Card from "../utils/Card/Card";
import Loader from "../utils/Loader/Loader";

const News = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const limit = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await Api.get(`${HOST_SERVER}/news`);

        setNews(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(news.length / limit);

  const handlePageClick = (page) => {
    if (page >= 0 && page < totalPages) {
      setIsPageLoading(true);

      setTimeout(() => {
        setCurrentPage(page);
        setIsPageLoading(false);
      }, 500);
    }
  };

  const displayedNews = news.slice(
    currentPage * limit,
    (currentPage + 1) * limit,
  );

  return (
    <section className="py-11 pb-16">
      <Helmet>
        <title>{ORG_NAME} | آخر الأخبار</title>
        <meta
          name="description"
          content={`تابع أحدث الأخبار والتحديثات على منصة ${ORG_NAME}. احصل على معلومات حصرية عن فعاليات الشباب، التطورات التكنولوجية، ومبادرات التنمية المجتمعية.`}
        />
        <meta
          name="keywords"
          content="أخبار, تطوير الذات, الصحة النفسية, التكنولوجيا, آخر الأخبار, قادرون, نصائح عملية, تثقيف صحي, شباب قادرون"
        />

        {/* Open Graph tags */}
        <meta property="og:title" content={`${ORG_NAME} | آخر الأخبار`} />
        <meta
          property="og:description"
          content={`كن أول من يعلم بأهم الأخبار والتحديثات على منصة ${ORG_NAME}. أخبار حصرية عن البرامج التدريبية والفعاليات الشبابية.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`${ORG_NAME} | آخر الأخبار`} />
        <meta
          name="twitter:description"
          content="مصدرك الرئيسي لأخبار الشباب والتكنولوجيا. تحديثات مباشرة عن ورش العمل، البرامج التدريبية، والفعاليات القادمة."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Helmet>
      <h2 className="underlineR mb-6 pb-5 text-3xl font-extrabold text-neutral-950 md:text-4xl">
        آخر <span className="relative top-1 text-primary">الاخبار</span>
      </h2>

      <main className="m-5 mt-16 flex flex-wrap justify-between gap-15 text-center sm:justify-center md:justify-center">
        {isLoading || isPageLoading ?
          <Loader />
        : displayedNews.map((news, index) => (
            <Link key={news._id} to={`/news/${news._id}`}>
              <Card
                key={index}
                description={news.newsTitle}
                image={`${HOST_SERVER}/imgs/${news.newsImg}`}
              />
            </Link>
          ))
        }
      </main>

      {!isLoading && news.length > 0 && (
        <div className="mt-8 flex justify-center space-x-2">
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 0}
            className={`rounded bg-gray-300 px-4 py-2 transition-colors hover:bg-gray-400 ${
              currentPage === 0 ? "cursor-not-allowed opacity-50" : ""
            }`}>
            السابق
          </button>

          {currentPage > 0 && (
            <button
              onClick={() => handlePageClick(currentPage - 1)}
              className="rounded bg-gray-300 px-4 py-2 transition-colors hover:bg-gray-400">
              {currentPage}
            </button>
          )}

          <button
            className="cursor-default rounded bg-primary px-4 py-2 text-white"
            disabled>
            {currentPage + 1}
          </button>

          {currentPage < totalPages - 1 && (
            <button
              onClick={() => handlePageClick(currentPage + 1)}
              className="rounded bg-gray-300 px-4 py-2 transition-colors hover:bg-gray-400">
              {currentPage + 2}
            </button>
          )}

          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage >= totalPages - 1}
            className={`rounded bg-gray-300 px-4 py-2 transition-colors hover:bg-gray-400 ${
              currentPage >= totalPages - 1 ?
                "cursor-not-allowed opacity-50"
              : ""
            }`}>
            التالي
          </button>
        </div>
      )}
    </section>
  );
};

export default News;
