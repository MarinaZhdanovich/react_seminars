import React from 'react'
import { useParams } from "react-router-dom";

const ArticleDetails = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id));

  if (!article) {
    return <div>Статья не найдена</div>
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <p>год</p>
    </div>
  )
}

export default ArticleDetails;

// useParams: Хук, который извлекает параметры маршрута из URL.
// Например, если URL /articles/2, то useParams вернёт { id: '2' }.