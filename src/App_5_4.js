import React, { useState, useEffect } from 'react';
// Вам необходимо разработать HOC withLoadingIndicator, который можно использовать для
// оборачивания любого компонента.Этот HOC должен принимать параметр isLoading, который
// определяет, идет ли в данный момент загрузка.Если isLoading равен true, то вместо оборачиваемого
// компонента должен отображаться загрузочный индикатор.
// 1. Создайте HOC withLoadingIndicator, который принимает компонент и возвращает новый
// компонент, который показывает либо индикатор загрузки, либо содержимое оригинального
// компонента в зависимости от пропса isLoading.
// 2. Можно использовать простой текстовый индикатор или любой спиннер из доступных
// библиотек.


// HOC с индикатором загрузки
const withLoadingIndicator = (Component) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div>Loading...</div>; // Индикатор загрузки
    }
    return <Component {...props} />; // Оригинальный компонент с пропсами
  };
};

// Компонент, отображающий данные
const MyComponent = ({ data }) => {
  return <div>{data}</div>;
};

// Оборачиваем MyComponent в HOC
const MyComponentWithLoading = withLoadingIndicator(MyComponent);

// class App extends React.Component { //пример компонента, написанного с использованием классовых компонентов
//   state = {
//     isLoading: true, // Изначально загрузка в процессе
//     data: null, // Данные пока не загружены
//   };

//   //В классовых компонентах есть специальные методы жизненного цикла, такие как componentDidMount().метод вызывается один раз сразу после того, как компонент был добавлен в DOM.
//   componentDidMount() {
//     // Симуляция загрузки данных
//     setTimeout(() => {
//       this.setState({ isLoading: false, data: 'Загруженные данные' });
//     }, 2000); // Через 2 секунды загрузим данные, используем setTimeout, чтобы симулировать задержку, например, как если бы мы загружали данные с сервера.
//   }

//   render() {
//     const { isLoading, data } = this.state;

//     // Рендерим компонент с индикатором загрузки
//     return <MyComponentWithLoading isLoading={isLoading} data={data} />;
//   }
// }

// export default App;

const App = () => {
  // Состояние для загрузки и данных
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  // Эффект, который имитирует загрузку данных
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setData('Загруженные данные');
    }, 2000); // Загружаем данные через 2 секунды
  }, []); // Пустой массив зависимостей, чтобы эффект сработал только один раз при монтировании компонента

  return <MyComponentWithLoading isLoading={isLoading} data={data} />;
};

export default App;