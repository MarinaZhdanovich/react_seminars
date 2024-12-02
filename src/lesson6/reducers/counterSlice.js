import { createSlice } from "@reduxjs/toolkit";

//Создает редьюсер для управления частью состояния.Генерирует экшены на основе переданных редьюсеров.

const counterSlice = createSlice({
  name: 'counter', //имя для текущего "среза" (slice) состояния.имя будет использоваться для генерации типов экшенов (например, counter/increment).
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => { //Получает текущее состояние state.
      state.count++; //Изменяет состояние напрямую (благодаря Immer, изменения будут записаны в новую копию состояния).
    },
    decrement: (state) => {
      state.count--;
    }
  }
});

//createSlice автоматически создает экшены для каждого редьюсера в reducers counter/increment, counter/decrement
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
//Редьюсер подключается к хранилищу Redux, чтобы управлять частью состояния приложения.