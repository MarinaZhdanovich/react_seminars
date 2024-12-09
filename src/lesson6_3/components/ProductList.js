import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../reducers/favoritesSlice';

const products = [
  {
    id: 1,
    name: "Ноутбук",
    description: "Легкий и мощный, идеальный для работы и развлечений.",
    price: 45000,
    available: true
  },
  {
    id: 2,
    name: "Чайник электрический",
    description: "Быстро кипятит воду, с функцией автоотключения.",
    price: 2500,
    available: true
  },
  {
    id: 3,
    name: "Смартфон",
    description: "С большим экраном, высокой производительностью и отличной камерой.",
    price: 60000,
    available: false
  }
];

export const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToFavorites = (product) => {
    dispatch(addFavorite(product)); // Добавляем товар в избранное
  };

  return (
    <div>
      <h3>Список товаров</h3>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <p>Цена: ${product.price}</p>
          <button onClick={() => handleAddToFavorites(product)}>Добавить в избранное</button>
        </div>
      ))}
    </div>
  );
};

