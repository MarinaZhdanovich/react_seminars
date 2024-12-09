import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; //позволяет отправлять (dispatch) действия в Redux.
import { addTask } from '../reducers/tasksSlice';

export const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch(); //для отправки действия в Redux

  const handleSubmit = (e) => {
    e.preventDefault(); // предотвращает перезагрузку страницы, которая происходит по умолчанию при отправке формы.
    if (description.trim()) {
      dispatch(addTask({ id: Date.now(), description, isCompleted: false }));
      setDescription(''); // Очищаем поле ввода
    }
  };

  //отправка действия (action) addTask в Redux. Мы создаём задачу с уникальным идентификатором (с помощью Date.now()), текстом задачи (description) и начальным состоянием isCompleted: false (задача не завершена).

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введите задачу"
        value={description} // связывает состояние description с полем ввода
        onChange={(e) => setDescription(e.target.value)} //обновляет состояние description при каждом изменении текста в поле ввода
      />
      <button type="submit">Добавить</button>
    </form>
  );
};
//<button type="submit">Добавить</button> кнопка для отправки формы, которая вызывает функцию handleSubmit при клике.