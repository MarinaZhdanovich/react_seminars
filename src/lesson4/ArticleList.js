import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => (
  <div>
    <h2>Список статей:</h2>
    <ul>
      {articles.map(article => (
        <li key={article.id}>
          <Link to={`/articles/${article.id}`}>{article.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ArticleList;

// Link: Создаёт ссылку, которая изменяет URL без перезагрузки страницы.
// Например, если вы нажмёте на статью с id=1, URL изменится на /articles/1.

// Переданный to={/articles/${article.id}} генерирует ссылку для каждой статьи.