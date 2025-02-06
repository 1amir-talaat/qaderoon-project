import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../../lib/Api";
import { HOST_SERVER } from "../../../lib/constants";
import { isEmptyArray } from "../../../lib/utils";
import Button from "../../../utils/Button";
import Card from "../../../utils/Card/Card";
import "./articles.css";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    AOS.init();

    const fetchData = async () => {
      try {
        const response = await Api.get(`articles/`);

        setArticles(response.data.data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="articles-cont">
      <div className="layer"></div>
      <div
        className="article-content container mx-auto px-4 text-center"
        data-aos="fade-down"
        data-aos-duration="1000">
        <h1 className="my-3 text-3xl font-bold text-white md:text-4xl">
          مقالات الرأي
        </h1>
        <p className="my-5 text-xl text-white">
          مجموعة من المقالات المحدثة باستمرار
        </p>
        <div className="m-5 flex flex-wrap justify-between gap-15 text-center sm:justify-center md:justify-center">
          {!isEmptyArray(articles) &&
            articles.map(({ _id, title, img }) => (
              <Link to={`/article/${_id}`} key={_id}>
                <Card
                  description={title}
                  image={`${HOST_SERVER}/imgs/${img}`}
                />
              </Link>
            ))}
        </div>
        <Button
          className="mx-auto bg-white font-semibold !text-primary transition-transform duration-200 hover:scale-105 hover:bg-white"
          link="/articles">
          عرض المزيد
        </Button>
      </div>
    </div>
  );
}

export default Articles;
