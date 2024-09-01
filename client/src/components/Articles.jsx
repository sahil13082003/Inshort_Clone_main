import { useState, useEffect } from "react";
import { getNews } from "../service/api";

import InfiniteScroll from "react-infinite-scroll-component";

//components
import Article from "./Article";

const Articles = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);

  // load all data filled with article as soon as website load and as soon as scroll reached to end
  useEffect(() => {
    const dailyNews = async () => {
      const response = await getNews();
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
      {" "}
      {news.map((article) => (
        <Article article={article} />
      ))}{" "}
    </InfiniteScroll>
  );
};

export default Articles;
/**
 * Looping the article using map(()=>{
 *
 * Single Component with data
 *
 * })=?
 */
