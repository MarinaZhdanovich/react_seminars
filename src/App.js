import React, { useContext } from "react";
import store from "./lesson5/Store";
import Counter from "./lesson5/Counter";
import { Provider } from 'react-redux'
import { createContext, useState } from 'react';

//Создайте контексты UserContext и ThemeContext с начальными
// значениями (например, имя пользователя: "Гость", тема: "светлая").
// ● Реализуйте компонент App:
// ○ Оберните дочерние компоненты в UserContext.Provider и
// ThemeContext.Provider.
// ○ Добавьте возможность изменения имени пользователя и
// темы через интерфейс пользователя.
// ● Создайте компоненты, использующие эти контексты:
// ○ Header должен отображать приветствие с именем
// пользователя.
// ○ Profile может показывать более детальную информацию о
// пользователе или просто использовать тему для стилизации.
// ○ Footer должен использовать тему для стилизации и,
// возможно, отображать копирайт с текущим годом.
// ● Добавьте возможность изменения темы и имени пользователя в
// интерфейсе, используя состояние в компоненте App и передавая
// функции для изменения через контекст.


//Provider: Дает доступ к хранилищу (store) всему приложению. оборачивает
// store={store}: какое именно хранилище использовать.

const UserContext = createContext({
  userName: 'Гость',
  setUserName: () => { }, //пустая функция-заглушка. Когда компонент окружен Provider, значение по умолчанию, заданное в createContext, больше не используется. Вместо этого компонент получает данные из value, переданного в Provider.
});
const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => { },
  toggleTheme: () => { },
});

// oтображает приветствие с именем пользователя
const Header = () => {
  const { userName } = useContext(UserContext);

  return (
    <div>
      <h1>Привет, {userName}!</h1>
    </div>
  );
};

const Profile = () => {
  const { userName, setUserName } = useContext(UserContext);

  return (
    <div>
      <h2>Профиль</h2>
      <label>
        Изменить имя:
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
    </div>
  );
};

const Footer = () => {

  return (
    <div>
      <p>© {new Date().getFullYear()} Все права защищены.</p>
    </div>
  );
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Переключить на {theme === 'light' ? 'тёмную' : 'светлую'} тему
    </button>
  );
};


const App = () => {
  const [userName, setUserName] = useState('Гость');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <UserContext.Provider value={{ userName, setUserName }}>
        <div
          style={{
            backgroundColor: theme === 'light' ? 'white' : 'black',
            color: theme === 'light' ? 'black' : 'white',
          }}
        >
          <Header />
          <ThemeToggle />
          <Profile />
          <Footer />
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};
// <Provider store={store}>
//   <Counter />
// </Provider>


export default App;