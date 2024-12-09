import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../reducers/favoritesSlice';

export const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites); // Получаем избранные товары из Redux
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFavorite(id)); // Удаляем товар из избранного
  };

  return (
    <div>
      <h3>Избранные товары</h3>
      {favorites.length > 0 ? (
        favorites.map((product) => (
          <div key={product.id}>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>Цена: ${product.price}</p>
            <button onClick={() => handleRemoveFromFavorites(product.id)}>Удалить из избранного</button>
          </div>
        ))
      ) : (
        <p>В вашем списке избранного нет товаров</p>
      )}
    </div>
  );
};

