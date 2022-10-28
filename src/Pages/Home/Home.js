import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hook/useTitle";
import NewsSummaryCart from "../Shared/NewsSummaryCart/NewsSummaryCart";

const Home = () => {
  const allNews = useLoaderData();
  useTitle("Home");
  return (
    <div>
      <h2 className="text-center pb-3">Dragon News: {allNews.length}</h2>
      {allNews.map((news) => (
        <NewsSummaryCart key={news._id} news={news}></NewsSummaryCart>
      ))}
    </div>
  );
};

export default Home;
