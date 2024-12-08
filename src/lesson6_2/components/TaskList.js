import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../reducers/tasksSlice';

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks); // Получаем список задач из store
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTask(id)); // Удаляем задачу по id
  };

  return (
    <div>
      <h3>Список задач</h3>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task.id}>
            <span>{task.description}</span>
            <button onClick={() => handleRemove(task.id)}>Удалить</button>
          </div>
        ))
      ) : (
        <p>Список задач пуст</p>
      )}
    </div>
  );
};