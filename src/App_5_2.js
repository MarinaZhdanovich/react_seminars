import React, { useState } from 'react';
//компонент высшего порядка (Higher-Order Component, HOC), который используется для оборачивания одного компонента другим с добавлением дополнительной функциональности

const withStyles = (WrappedComponent, styles) => { //WrappedComponent — это компонент, который мы оборачиваем (например, Button или Text).
  return (props) => { //styles — объект со стилями, которые мы хотим добавить к компоненту.//Возвращает новый компонент
    const newProps = { ...props, styles }; //Новый компонент передаёт все полученные props (...props) и добавляет к ним styles.
    return <WrappedComponent {...newProps} /> //рендерит WrappedComponent с этими объединёнными пропсами
  }
}

//Применяется к кнопке через атрибут style.
const Button = ({ styles }) => {
  return (
    <button style={styles}>
      Click me
    </button>
  )
}

const Text = ({ styles }) => {
  return (
    <p style={styles}>
      Text
    </p>
  )
}


const withCounter = (WrappedComponent) => { //обёрнут (например, ClickCounter)
  return (props) => {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
      setCount(count + 1)
    }

    const newProps = {  //Создаётся объект newProps, который объединяет:текущее значение счётчика.
      //incrementCount — функцию для увеличения счётчика.Все исходные пропсы (...props).
      count,
      incrementCount,
      ...props,
    }

    return <WrappedComponent {...newProps} />
  }
}

const ClickCounter = ({ count, incrementCount, message }) => {
  return (
    <div>
      <p>{message}</p>
      <button onClick={incrementCount}>Click me</button>
      <p>Clicked {count} times</p>
    </div>
  )
}

const ClickCounterWithCounterAndProps = withCounter(ClickCounter);
//ClickCounter оборачивается в withCounter, который добавляет к нему состояние счётчика (count) и функцию увеличения (incrementCount).

const StyledButton = withStyles(Button, { background: 'blue', color: 'white' });
const StyledButton2 = withStyles(Button, { background: 'green', color: 'white' });
const StyledText = withStyles(Text, { background: 'grey', color: 'black' });
//Создаётся новый компонент StyledButton, который добавляет стили { background: 'blue', color: 'white' } к кнопке.


const App = () => {
  return (
    <div>
      <h1>Пример компоненты высшего порядка Hoc</h1>
      <StyledButton />
      <StyledButton2 />
      <StyledText />
      <ClickCounterWithCounterAndProps message="Счетчик кликов:" />
      <ClickCounterWithCounterAndProps message='Счетчик новых кликов:' />
    </div>
  )
}

export default App;