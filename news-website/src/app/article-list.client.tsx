"use client";

import { useCallback } from "react";

export function ArticleList() {
  const fetchArticles = useCallback(() => {
    const 

  }, [])
  useEffect(() => {


  }, []);
  return (
    <ol>
      {articles.map((article) => {
        const date = new Date(article.publicationDateTime);
        return (
          <li key={article.title}>
            <p>{article.title}</p>
            <time dateTime={article.publicationDateTime}>
              {date.toLocaleTimeString()} - {date.toLocaleDateString()}
            </time>
          </li>
        );
      })}
    </ol>
  );
}
