import React from 'react';
import { Link } from 'react-router-dom';

const ListPage = ({ items }) => (
  <div>
    <h2>Список страниц:</h2>
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link to={`/detail/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ListPage;