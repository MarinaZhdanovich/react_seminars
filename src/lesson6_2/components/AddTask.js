import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../reducers/tasksSlice';

export const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      dispatch(addTask({ id: Date.now(), description, isCompleted: false })); // Добавляем задачу
      setDescription(''); // Очищаем поле ввода
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введите задачу"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};