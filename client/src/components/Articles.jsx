import { useState, useEffect } from "react";
import { getNews } from "../service/api";
import InfiniteScroll from "react-infinite-scroll-component";

//components
import Article from "./Article";

const Articles = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);

  // load all data filled with articles as soon as website loads or scroll reaches the end
  useEffect(() => {
    const dailyNews = async () => {
      const response = await getNews() || []; // Ensure response is an array
      console.log(new Set([...news, ...response]));
      setNews([...new Set([...news, ...response])]);
    };
    dailyNews();
  }, [page]);

  useEffect(() => {
    console.log(news);
  }, [news]);

  return (
    <InfiniteScroll
      dataLength={news.length}
      next={() => setPage((page) => page + 1)}
      hasMore={true}
    >
      {news.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </InfiniteScroll>
  );
};

export default Articles;
