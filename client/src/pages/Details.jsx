import Api from "../lib/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isEmptyObject } from "../lib/utils";
import Loader from "../utils/Loader/Loader";
import NewsDetails from "../components/Details/NewsDetails";
import ArticleDetails from "../components/Details/ArticleDetails";
import { HOST_SERVER } from "../lib/constants";

function Details(props) {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [type] = useState(props.type == "news" ? "news" : "articles");
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchArticels = async () => {
      try {
        setIsLoading(true);
        const res = await Api.get(`${HOST_SERVER}/articles/${id}`);

        const authorRes = await Api.get(
          `${HOST_SERVER}/authors/${res.data.data.author}`
        );

        setData({ ...res.data.data, author: authorRes.data.data });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const res = await Api.get(`${HOST_SERVER}/news/${id}`);

        setData({ ...res.data.data, author: null });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    switch (type) {
      case "news":
        fetchNews();
        break;
      case "articles":
        fetchArticels();
        break;
      default:
        break;
    }
  }, [id, type]);

  return (
    <div className="max-w-screen-xl mx-auto pb-10">
      {isLoading || isEmptyObject(data) ? (
        <div className="w-full loader-container grid place-items-center overflow-y-hidden h-[75dvh]">
          <Loader />
        </div>
      ) : (
        <main className="md:mt-10 mt-0">
          {type == "news" ? (
            <NewsDetails news={data} />
          ) : (
            <ArticleDetails article={data} />
          )}
        </main>
      )}
    </div>
  );
}

export default Details;
