import { configureStore } from '@reduxjs/toolkit'

const reducer = (state = 0, action) => { //state = 0 начальное значение нашего состояния,action: команда, которая говорит, что нужно сделать
  switch (action.type) { //смотрим, какая команда пришла
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = configureStore({  //создаёт хранилище с помощью функции configureStore принимает объект с настройками. В данном случае передаётся ключ reducer.
  reducer: reducer,
})

export default store;