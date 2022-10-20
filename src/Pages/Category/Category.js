import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCart from "../Shared/NewsSummaryCart/NewsSummaryCart";

const Category = () => {
  const categoryNews = useLoaderData();
  console.log(categoryNews);
  return (
    <div>
      <h4>This category has news: {categoryNews.length}</h4>
      {categoryNews.map((news) => (
        <NewsSummaryCart key={news._id} news={news}></NewsSummaryCart>
      ))}
    </div>
  );
};

export default Category;
