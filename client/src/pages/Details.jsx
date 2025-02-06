import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleDetails from "../components/Details/ArticleDetails";
import NewsDetails from "../components/Details/NewsDetails";
import Api from "../lib/Api";
import { HOST_SERVER } from "../lib/constants";
import { isEmptyObject } from "../lib/utils";
import Loader from "../utils/Loader/Loader";

function Details(props) {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [type] = useState(props.type === "news" ? "news" : "articles");
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchArticels = async () => {
      try {
        setIsLoading(true);
        const res = await Api.get(`${HOST_SERVER}/articles/${id}`);

        const authorRes = await Api.get(
          `${HOST_SERVER}/authors/${res.data.data.author}`,
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
    <main className="mx-auto max-w-screen-xl pb-10">
      {isLoading || isEmptyObject(data) ?
        <div className="loader-container grid h-[75dvh] w-full place-items-center overflow-y-hidden">
          <Loader />
        </div>
      : <article className="mt-0 lg:mt-10">
          {type === "news" ?
            <NewsDetails news={data} />
          : <ArticleDetails article={data} />}
        </article>
      }
    </main>
  );
}

export default Details;
