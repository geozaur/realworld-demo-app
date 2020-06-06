import React, { useState, useEffect } from "react";
import api from "../../data/api";

export default () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    api.getArticles()
        .then(res => setArticles(res.data.articles));
  }, []);

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.slug}>{article.title}</li>
      ))}
    </ul>
  );
};
