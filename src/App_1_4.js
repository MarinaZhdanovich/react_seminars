import './App.css';
import React, { useState } from 'react';
import ArticleDetails from './lesson4/ArticleDetails';
import ArticleList from './lesson4/ArticleList';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import ProductList from './lesson4/ProductList';
import ProductDetail from './lesson4/ProductDetail';
import Box from './lesson4/Box';
import List from './lesson4/List';
import DetailPage from './lesson4/DetailPage';
import ListPage from './lesson4/ListPage';


const articles = [
  { id: 1, title: 'Статья 1', content: 'Содержимое статьи 1' },
  { id: 2, title: 'Статья 2', content: 'Содержимое статьи 2' },
  { id: 3, title: 'Статья 3', content: 'Содержимое статьи 3' },
  { id: 4, title: 'Статья 4', content: 'Содержимое статьи 4' },
];

const products = [
  { id: 1, name: "Товар 1", description: "Описание товара 1", price: "100 руб." },
  { id: 2, name: "Товар 2", description: "Описание товара 2", price: "200 руб." },
  { id: 3, name: "Товар 3", description: "Описание товара 3", price: "300 руб." },
  { id: 4, name: "Товар 4", description: "Описание товара 4", price: "400 руб." },
  { id: 5, name: "Товар 5", description: "Описание товара 5", price: "500 руб." },
  { id: 6, name: "Товар 6", description: "Описание товара 6", price: "600 руб." },
]

const items = [
  { id: 1, name: 'Страница 1' },
  { id: 2, name: 'Страница 2' },
  { id: 3, name: 'Страница 3' },
];


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage items={items} />} />
        <Route path="/detail/:id" element={<DetailPage items={items} />} />
      </Routes>
    </BrowserRouter>
  );
}

// const App = () => (
//   <BrowserRouter> {/* Используем BrowserRouter */}
//     <div>
//       <h1>Приложение для просмотра статей</h1>
//       <Routes>
//         <Route path="/articles/:id" element={<ArticleDetails articles={articles} />} />
//         <Route path="*" element={<ArticleList articles={articles} />} />
//       </Routes>
//     </div>
//   </BrowserRouter>
// );

// const App = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/page/:pageNumber" element={<ProductList products={products} />} />
//       <Route path="/product/:productId" element={<ProductDetail products={products} />} />
//       <Route path="/" element={<ProductList products={products} />} />
//     </Routes>
//   </BrowserRouter>
// );

// const App = () => {
//   const items = [
//     { id: 1, text: 'First Item', color: 'red' },
//     { id: 2, text: 'Second Item', color: 'blue' },
//     { id: 3, text: 'Third Item', color: 'green' },
//   ];

//   const renderItem = (item, index) => (
//     <span style={{ color: item.color }}>
//       {index + 1}. {item.text}
//     </span>
//   );

//   return (
//     <div>
//       <h1>Styled List</h1>
//       <List items={items} renderItem={renderItem} />
//     </div>
//   );
// };

// function App() {
//   return (
//     <div>
//       <Box>
//         <h2>Hello world</h2>
//         <p>мяу мяу</p>
//       </Box>
//       <Box>
//         <h3>Марина</h3>
//       </Box>
//     </div>
//   );
// }


// const userName = 'Marina';
// return (
// <div className='App'>
//   {
//     console.log(
//       <DivWithChild>
//         <p>Новый текст</p>
//         <div>Новый элемент div</div>
//       </DivWithChild>
//     )
//   }

// <div className='App'>
//   <div>
//     <h2>Пример 2 использования Children</h2>
//     <BorderComp>
//       <p>Этот абзац находится внутри рамки.</p>
//       <button>Кнопка внутри рамки</button>
//     </BorderComp>
//     <BorderComp>
//       <h3>Новый заголовок</h3>
//     </BorderComp>
//     <p>Этот абзац находится снаружи рамки.</p>
//   </div>

// <div className='App'>
//   <h2>Пример 3 использования 'props.children'</h2>
//   <Card title="Карточка 1">
//     <p>Это содержание первой карточки</p>
//     <button>Действие</button>
//   </Card>
//   <Card title="Карточка 2">
//     <p>Это содержание второй карточки</p>
//     <a href="#">Ссылка</a>
//   </Card>
// <div>
//   <MouseTracker render={({ x, y }) => <MouseInfo x={x} y={y} />} />


{/* <Greeting2 name='Marina' />
      <CounterLesson3 />
      <MessagesList text='Мяу Мяу' />
      <ThemeSwitcher />
      <TextDisplayForm /> */}
{/* <Student name='Marina' age={30} isStudent={true} />
      <ParentCounter />
      <InputForm />
      <Nav />
      <HoverRating /> */}
{/* <h1>Hello {userName}</h1> */ }
{/* <TodoList />
      <TextInput />
      <Counter2 />
      <MessagesList />
      <RefExample />
      <Timer />
      <Counter />
      <Show data="Марина, everything will be ok" />
      <Show data="ПОНЯТНО?" />
      <Article number='1' name='Info' />
      <Article number='2' name='Blog' />
      <Greeting />
      <CurrentTime />
      <div>
        <EventCard
          title="Концерт группы 'Крутая группа'"
          date="22 октября 2024, 19:00"
          location="Москва, Крокус Сити Холл"
          booleanS={true}
        />
        <EventCard
          title="Выставка 'Мир Динозавров'"
          date="5 ноября 2024, 10:00"
          location="Санкт-Петербург, Экспофорум"
          booleanS={false}
        />
        <EventCard
          title="Фестиваль еды 'Вкусная осень'"
          date="12 ноября 2024, 12:00"
          location="Нижний Новгород, Парк культуры и отдыха"
          booleanS={false}
        /> */}
{/* </div> */ }
// </div >
//   );
// }

// function Article({ name, number }) {
//   let themeSiteWhite = true;

//   return (
//     <div>
//       <h2 style={{ color: themeSiteWhite ? "green" : "red" }}>Статья про {name} номер {number}</h2>
//       <a href="#">Читать статью</a>
//     </div>
//   );
// }

function DivWithChild({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

const BorderComp = ({ children }) => {
  return (
    <div style={{ border: '2px solid #000', padding: '16px' }}>
      {children}
    </div>
  )
}

const Card = ({ title, children }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px' }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};


const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 }); //отвечает за сбор данных о движении мыши.

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY })
  };

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  )
}

const MouseInfo = ({ x, y }) => {  //MouseTracker передает координаты мыши в MouseInfo, а тот их отображает.
  return (
    <div>
      <h1>Положение курсора мыши</h1>
      <p>X: {x}, Y:{y}</p>
    </div>
  )
}
export default App;
// Компонент App рендерит MouseTracker, передавая в него функцию render, которая рендерит компонент MouseInfo с координатами мыши (x и y).
// Когда пользователь двигает мышь, состояние position обновляется, вызывая повторный рендер компонента MouseInfo с новыми координатами.