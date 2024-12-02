import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from './lesson6_1/actions/todoActions'
import { FilterContext } from './lesson6_1/contexts/FilterContext'
import withFilter from './lesson6_1/hoc/withFilter';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const { filter } = useContext(FilterContext);

  const filteredTodos = withFilter(todos, filter);

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <ul>
      {filteredTodos.map(todo => (
        <li
          key={todo.id}
          onClick={() => handleToggleTodo(todo.id)}
          style={{ textDecoration: todo.comleted ? 'line-through' : 'none' }}
        >{todo.text}
        </li>
      ))}
    </ul>
  )
}

export default TodoList;