import React from "react";
import { Provider } from 'react-redux';
import store from './lesson6/store/index.js'
import ButtonComponent from './lesson6/components/ButtonComponent.js'
import CounterComponent from "./lesson6/components/CounterComponent.js"
import ButtonComponentMinus from "./lesson6/components/ButtonComponentMinus.js";


const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CounterComponent />
        <ButtonComponent />
        <ButtonComponentMinus />
      </div>
    </Provider>
  )
}

export default App;