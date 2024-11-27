import React, { createContext, useContext, useState } from 'react';

//React.Context помогает передавать данные "сверху вниз" по компонентам,
//без необходимости явно передавать их через каждую "прослойку" в виде пропсов (props).

const MessageContext = createContext(); // хранит данные доступные для всех компонентов

function GrandParent() { // главный компонент. Он "оборачивает" другие компоненты в MessageContext.Provider,
  //чтобы данные из контекста стали доступны всем его "детям".
  return (
    <MessageContext.Provider value="Hello from the top Context">
      <Parent />
    </MessageContext.Provider>
  ); //Мы "заворачиваем" компонент Parent в Provider, чтобы сообщение "Hello from the top Context" стало доступным всем "внутри".
}

function Parent() {
  return <Child />;
}
//Это просто промежуточные компоненты, они ничего не делают, просто передают управление дальше.
//Они показывают, что данные можно передавать через много уровней вложенности, даже если промежуточные компоненты их не используют.
function Child() {
  return <GrandChild />;
}

function GrandChild() {
  return <GrandGrandGrandChild />;
}

function GrandGrandGrandChild() {   //Это конечный компонент, который получает данные из контекста с помощью useContext и показывает их на экране.
  const message = useContext(MessageContext);
  return <span>{message}</span>;
}

const ThemeContext = createContext(); // контекст темы позволяет "делиться" информацией о текущей теме (цветах фона и текста) между компонентами.
const NotesContext = createContext(); //хранит данные о списке заметок и функцию для добавления новых заметок.

const useTheme = () => useContext(ThemeContext); //это пользовательские хуки, которые упрощают доступ к данным контекста. Вместо того чтобы каждый раз писать useContext(ThemeContext), можно просто вызвать useTheme().
const useNotes = () => useContext(NotesContext);

const NoteList = () => {
  const { notes } = useNotes(); //Этот компонент берёт список заметок из NotesContext через useNotes() и отображает их в виде списка (<ul>).
  return ( //деструктуризации достаем только notes из <NotesContext.Provider value={{ notes, addNote }}>
    <ul>
      {notes.map((note, index) => (
        <li key={index}>{note}</li>
      ))}
    </ul>
  );
};

const NoteInput = () => { //Этот компонент содержит текстовое поле (<input>) для ввода новой заметки и кнопку для её добавления.
  const [inputValue, setInputValue] = useState('');
  const { addNote } = useNotes();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleAddNote = () => {
    addNote(inputValue);
    setInputValue('')
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddNote}>Добавить</button>
    </div>
  )
}

const ThemeToggle = () => {   //Этот компонент переключает тему с помощью функции toggleTheme из ThemeContext.
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>Нажми чтобы переключить на {theme === 'light' ? 'темную' : 'светлую'} тему</button>
  )
}

function App() {
  const [theme, setTheme] = useState('light');
  const [notes, setNotes] = useState(['Элемент списка 1', 'Элемент списка 2']);


  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  };

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  }

  return (
    <div>
      {/* <h1>Пример использования React.Context</h1>
      <GrandParent /> */}

      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <NotesContext.Provider value={{ notes, addNote }}>
          <div
            className="content"
            style={{
              color: theme === 'light' ? 'black' : 'white', //Если тема 'light', текст будет чёрным, а фон — белым.
              background: theme === 'light' ? 'white' : 'black',
            }}
          >
            <h1>Список</h1>
            <ThemeToggle />
            <NoteList />
            <NoteInput />
          </div>
        </NotesContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}
//Позволяют передавать данные о теме и заметках вглубь дерева компонентов без ручной передачи через пропсы.
export default App;