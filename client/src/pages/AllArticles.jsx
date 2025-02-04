import Api from "../lib/Api";
import { useEffect, useState } from "react";
import Card from "../utils/Card/Card";
import { Link } from "react-router-dom";
import Loader from "../utils/Loader/Loader";
import { Helmet } from "react-helmet";
import { isEmptyArray } from "../lib/utils";
import { HOST_SERVER } from "../lib/constants";

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
    (currentPage + 1) * limit
  );

  return (
    <>
      <Helmet>
        <title>قادرون | آخر المقالات</title>
        <meta
          name="description"
          content="اكتشف أحدث المقالات على موقع قادرون. اطلع على مقالات متنوعة في مجالات التنمية الذاتية، الصحة النفسية، والتكنولوجيا. تصفح الآن للمزيد من المعرفة!"
        />
        <meta
          name="keywords"
          content="مقالات, تطوير الذات, الصحة النفسية, التكنولوجيا, آخر المقالات, قادرون, نصائح عملية, تثقيف صحي, شباب قادرون"
        />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="قادرون | آخر المقالات" />
        <meta
          property="og:description"
          content="تصفح أحدث المقالات التعليمية والتنموية في مختلف المجالات على منصة قادرون. استفد من خبراتنا في تطوير الذات وتحسين الجودة الحياتية."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${HOST_SERVER}/imgs/logo.png`} />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@QaderoonPlatform" />
        <meta name="twitter:title" content="قادرون | مقالات تنموية وتثقيفية" />
        <meta
          name="twitter:description"
          content="استكشف مكتبتنا الغنية بالمقالات في مجالات التنمية الشخصية والصحة النفسية. تحديثات دورية بمحتوى قيّم ومفيد للجميع."
        />
        <meta
          name="twitter:image"
          content={`${HOST_SERVER}/imgs/logo-twitter.png`}
        />
      </Helmet>
      <div className="py-11 pb-16">
        <h2 className="font-extrabold text-3xl md:text-4xl pb-5 underlineR text-neutral-950 mx-auto">
          اخر <span className="text-primary relative top-1">المقالات</span>
        </h2>

        <div className="flex flex-wrap justify-between gap-15 m-5 md:justify-center text-center sm:justify-center cards-containerr mt-16">
          {isLoading || isPageLoading ? (
            <Loader />
          ) : (
            displayedArticles.map(({ _id, title, Img }) => (
              <Link key={_id} to={`/article/${_id}`}>
                <Card description={title} image={`${HOST_SERVER}/imgs/` + Img} />
              </Link>
            ))
          )}
        </div>

        {!isLoading && !isEmptyArray(articles) && (
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={currentPage === 0}
              className={`px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors ${
                currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}>
              السابق
            </button>

            {currentPage > 0 && (
              <button
                onClick={() => handlePageClick(currentPage - 1)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors">
                {currentPage}
              </button>
            )}

            <button
              className="px-4 py-2 bg-primary text-white rounded cursor-default"
              disabled>
              {currentPage + 1}
            </button>

            {currentPage < totalPages - 1 && (
              <button
                onClick={() => handlePageClick(currentPage + 1)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors">
                {currentPage + 2}
              </button>
            )}

            <button
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={currentPage >= totalPages - 1}
              className={`px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors ${
                currentPage >= totalPages - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}>
              التالي
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default AllArticles;
