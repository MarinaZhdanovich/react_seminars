import React from "react";
import { Provider } from "react-redux";
import store from './lesson6_1/store/store'
import { FilterProvider } from "./lesson6_1/contexts/FilterContext";
import AddTodo from "./lesson6_1/components/AddTodo";
import TodoList from './lesson6_1/components/TodoList';
import TodoFilter from './lesson6_1/components/TodoFilter';

const App = () => {
  return (
    <Provider store={store}>
      <FilterProvider>
        <AddTodo />
        <TodoList />
        <TodoFilter />
      </FilterProvider>
    </Provider>
  );
};

export default App;

