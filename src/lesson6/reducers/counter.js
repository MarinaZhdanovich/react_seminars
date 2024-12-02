const initialState = {
  count: 0
};


//...state копирует все свойства объекта state в новый объект.
//state = { count: 0 }; экшн action = { type: 'INCREMENT' }; выполнение редюсера 
//return {
// ...state,          // Копируем все свойства объекта state (count: 0)
// count: state.count + 1 // Обновляем значение count (0 + 1)
const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}

export default counter;