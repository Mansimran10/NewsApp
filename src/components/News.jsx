import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Button from "./Button";

export default function News({ pageSize, category, api }) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  async function updateNews() {
    let url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${api}&pageSize=${pageSize}&page=${page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
  }

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [page, category]);

  const handleNext = () => setPage(page + 1);
  const handlePrev = () => setPage(page - 1);

  return (
    <div className="container my-4">
      <h1 className="text-center">NewsBuddy - Top Headlines</h1>
      <div className="newsItems">
        {articles.map((element) => (
          <NewsItem
            key={element.url}
            title={element.title ? element.title.slice(0, 45) : ""}
            description={
              element.description ? element.description.slice(0, 88) : ""
            }
            imgUrl={element.urlToImage}
            newsUrl={element.url}
            author={element.author ? element.author : "unknown"}
            date={element.publishedAt}
          />
        ))}
      </div>
      <Button funcNext={handleNext} funcPrev={handlePrev} page={page} />
    </div>
  );
}
