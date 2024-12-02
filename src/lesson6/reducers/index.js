import { combineReducers } from "redux";
import counterReducer from './counterSlice';

//код объединяет редьюсеры в единый корневой редьюсер (rootReducer)
//Создает отдельные "ветки" состояния для каждого редьюсера.

const rootReducer = combineReducers({
  counter: counterReducer
});
//Ключ: counter — название ветки состояния.
//Значение: counterReducer — редьюсер, который отвечает за управление состоянием counter.
export default rootReducer;