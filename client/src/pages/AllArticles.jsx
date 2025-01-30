import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../utils/Card/Card";
import { Link } from "react-router-dom";
import Loader from "../utils/Loader/Loader";
import { isEmptyArray } from "../lib/utils";

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
        const response = await axios.get(`${import.meta.env.VITE_HOST_SERVER}articles/`);

        console.log("API Response Data:", response.data.data);

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

  const displayedArticles = articles.slice(currentPage * limit, (currentPage + 1) * limit);

  return (
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
              <Card
                description={title}
                image={`${import.meta.env.VITE_HOST_SERVER}imgs/` + Img}
              />
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

          <button className="px-4 py-2 bg-primary text-white rounded cursor-default" disabled>
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
              currentPage >= totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            التالي
          </button>
        </div>
      )}
    </div>
  );
}

export default AllArticles;
