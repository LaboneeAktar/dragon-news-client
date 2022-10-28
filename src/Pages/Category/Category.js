import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hook/useTitle";
import NewsSummaryCart from "../Shared/NewsSummaryCart/NewsSummaryCart";

const Category = () => {
  const categoryNews = useLoaderData();
  useTitle("Category");
  console.log(categoryNews);
  return (
    <div>
      <h4 className="text-center pb-3">
        This category has news: {categoryNews.length}
      </h4>
      {categoryNews.map((news) => (
        <NewsSummaryCart key={news._id} news={news}></NewsSummaryCart>
      ))}
    </div>
  );
};

export default Category;
