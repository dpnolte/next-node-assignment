"use client";

import { Article } from "@/models";
import { useCallback, useEffect, useState } from "react";

export function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = useCallback(async () => {
    const response = await fetch(`/api/articles`);
    if (!response.ok) {
      throw new Error(`Response was not ok: ${response.status}`);
    }
    const nextArticles: Article[] = await response.json();
    setArticles(nextArticles);
  }, []);

  useEffect(() => {
    fetchArticles().catch(console.error);
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
