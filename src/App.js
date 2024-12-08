import React from "react";
import { Provider } from "react-redux";
import { store } from './lesson6_2/store/store'
import { AddTask } from './lesson6_2/components/AddTask'
import { TaskList } from './lesson6_2/components/TaskList';



const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Список дел</h1>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;