import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Api from "../lib/Api";
import { HOST_SERVER, ORG_NAME } from "../lib/constants";
import { isEmptyArray } from "../lib/utils";
import Card from "../utils/Card/Card";
import Loader from "../utils/Loader/Loader";

function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const limit = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await Api.get(`${HOST_SERVER}/articles/`);

        setArticles(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(articles.length / limit);

  const handlePageClick = (page) => {
    if (page >= 0 && page < totalPages) {
      setIsPageLoading(true);

      setTimeout(() => {
        setCurrentPage(page);
        setIsPageLoading(false);
      }, 500);
    }
  };

  const displayedArticles = articles.slice(
    currentPage * limit,
    (currentPage + 1) * limit,
  );

  return (
    <>
      <Helmet>
        <title>{ORG_NAME} | آخر المقالات</title>
        <meta
          name="description"
          content={`اكتشف أحدث المقالات على موقع ${ORG_NAME}. اطلع على مقالات متنوعة في مجالات التنمية الذاتية، الصحة النفسية، والتكنولوجيا. تصفح الآن للمزيد من المعرفة!`}
        />
        <meta
          name="keywords"
          content="مقالات, تطوير الذات, الصحة النفسية, التكنولوجيا, آخر المقالات, قادرون, نصائح عملية, تثقيف صحي, شباب قادرون"
        />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={`${ORG_NAME} | آخر المقالات`} />
        <meta
          property="og:description"
          content={`تصفح أحدث المقالات التعليمية والتنموية في مختلف المجالات على منصة ${ORG_NAME}. استفد من خبراتنا في تطوير الذات وتحسين الجودة الحياتية.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`${ORG_NAME} | آخر المقالات`} />
        <meta
          name="twitter:description"
          content="استكشف مكتبتنا الغنية بالمقالات في مجالات التنمية الشخصية والصحة النفسية. تحديثات دورية بمحتوى قيّم ومفيد للجميع."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Helmet>
      <section className="py-11 pb-16">
        <h2 className="underlineR mx-auto pb-5 text-3xl font-extrabold text-neutral-950 md:text-4xl">
          آخر <span className="relative top-1 text-primary">المقالات</span>
        </h2>

        <main className="m-5 mt-16 flex flex-wrap justify-between gap-15 text-center sm:justify-center md:justify-center">
          {isLoading || isPageLoading ?
            <Loader />
          : displayedArticles.map(({ _id, title, img }) => (
              <Link key={_id} to={`/article/${_id}`}>
                <Card
                  description={title}
                  image={`${HOST_SERVER}/imgs/${img}`}
                />
              </Link>
            ))
          }
        </main>

        {!isLoading && !isEmptyArray(articles) && (
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
    </>
  );
}

export default AllArticles;
