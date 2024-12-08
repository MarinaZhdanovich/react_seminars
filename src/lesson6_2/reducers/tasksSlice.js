import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({ //для создания слайса (части состояния) Redux. Автоматически генерирует редьюсеры и действия (actions), связанные с этим состоянием.
  name: 'tasks', // Имя слайса
  initialState: [], // Начальное состояние — пустой массив задач
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload); // Добавляем новую задачу
    },
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload); // ищет все задачи, чей id не совпадает с action.payload (идентификатором задачи, которую нужно удалить), и возвращает новый массив без этой задачи.
    },
  },
});

export const { addTask, removeTask } = tasksSlice.actions; //Это именованные действия, которые можно будет использовать в компонентах для диспатча (отправки) этих действий в Redux. 
export default tasksSlice.reducer; //обращаемся к свойству reducer объекта, который возвращается из функции createSlice
//это автоматически сгенерированный редьюсер, который объединяет все редьюсеры, описанные в reducers, в один редьюсер.

//reducers: объект, в котором описаны функции для изменения состояния (редьюсеры).
//Каждый ключ этого объекта — это название действия (action), а соответствующие значения — это функции, которые изменяют состояние.

//В Redux каждое действие (action) — это объект, который обычно имеет хотя бы два свойства:
//type: строка, которая описывает тип действия (например, 'tasks/addTask').
//payload: дополнительная информация, которая передается с действием и может быть использована для изменения состояния.
// {
//   type: 'tasks/addTask',  // тип действия
//   payload: { id: 1, text: 'Learn Redux' } // переданная задача
// }