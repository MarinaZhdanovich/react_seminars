import React from "react";
import { Provider } from "react-redux";
import { store } from './lesson6_3/store/store'
import { ProductList } from './lesson6_3/components/ProductList'
import { FavoritesList } from './lesson6_3/components/FavoritesList';



const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Магазин</h1>
        <ProductList />
        <FavoritesList />
      </div>
    </Provider>
  );
};

export default App;


// const initialProducts = [
//   {
//   "id": 1,
//   "name": "Ноутбук",
//   "description": "Легкий и мощный, идеальный для работы и развлечений.",
//   "price": 45000,
//   "available": true
//   },
//   {
//   "id": 2,
//   "name": "Чайник электрический",
//   "description": "Быстро кипятит воду, с функцией автоотключения.",
//   "price": 2500,
//   "available": true
//   },
//   {
//   "id": 3,
//   "name": "Смартфон",
//   "description": "С большим экраном, высокой производительностью и отличной камерой.",
//   "price": 60000,
//   "available": false
//   }
//   ];

//   const App = () => {
//   return (
//   <Provider store={store}>
//   <div>
//   <h1>Товары</h1>
//   <ProductsList products={initialProducts} />
//   <FavoritesList />
//   </div>
//   </Provider>
//   );
//   };


//const ProductsList = ({ products }) => {
// const dispatch = useDispatch();

// return (
// <div>
// {products.map(product => (
// <div key={product.id}>
// <h3>{product.name}</h3>
// <p>{product.description} - ${product.price}</p>
// <button onClick={() => dispatch(addFavorite(product))}>Добавить в избранное</button>
// </div>
// ))}
// </div>
// );
// };