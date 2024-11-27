import React from "react";
import { useSelector, useDispatch } from 'react-redux';

//useSelector: Берём значение из хранилища
//useDispatch: Позволяет отправить команду в хранилище.

const Counter = () => {
  const counter = useSelector(state => state); //state => state: функция, которая указывает, какую часть данных из хранилища мы хотим получить.мы берём всё состояние (state)
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' }) //команда передаётся в редьюсер (case 'INCREMENT': return state + 1;)
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT' })
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
    </div>
  )
}

export default Counter;