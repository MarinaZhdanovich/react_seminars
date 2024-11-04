import React, { useState } from 'react';

//Создать компонент TodoList, который позволяет добавлять
// элементы в список дел через текстовое поле ввода. Список
// должен обновляться при добавлении нового дела.

function TodoList() {
  const [todos, setTodos] = useState([]); // список всех дел
  const [currentTodo, setCurrentTodo] = useState(''); //текущий ввод в текстовом поле

  // Функция для добавления нового дела
  const addTodo = (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    if (!currentTodo.trim()) {
      return; // Игнорируем пустые строки
    }
    setTodos([...todos, currentTodo]); // Добавляем дело в список
    setCurrentTodo(''); // Очищаем поле ввода
  };

  const handleInputChange = (event) => {
    setCurrentTodo(event.target.value); // Обновляем текущее дело
  };

  return (
    <div>
      <h1>Список дел</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={currentTodo}
          onChange={handleInputChange}
          placeholder="Введите новое дело"
        />
        <button type="submit">Добавить</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;