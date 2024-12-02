import React from 'react';
import { Provider } from 'react-redux';
import Counter from './lesson5/Counter2';
import store from './lesson5/Reducer';

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;