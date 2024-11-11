// Создать React компонент TextDisplayForm, который позволяет пользователю ввести
// текст в поле ввода и отобразить его на экране в стилизованном виде по нажатию
// кнопки.
// ● Создание поля ввода (TextField)
// ○ Добавить TextField для ввода текста пользователем.
// ○ Установить метку (label) поля ввода на "Введите текст".
// ○ Сделать поле ввода на всю ширину (fullWidth).
// ● Разместить кнопку под полем ввода.
// ○ Установить текст кнопки на "Отобразить текст".
// ○ При нажатии на кнопку введенный текст должен отображаться под
// кнопкой.
// Отображение введенного текста
// ○ Использовать состояние для хранения введенного и отображаемого текста.
// ○ При нажатии на кнопку текст из поля ввода должен отображаться в
// стилизованной карточке (Card) под кнопкой.
// ● Стилизация отображаемого текста
// ○ Для отображения текста использовать компонент Typography с вариантом
// h5.

import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

function TextDisplayForm() {
  const [text, setText] = useState(''); //для хранения текста, вводимого пользователем в поле ввода.
  const [displayedText, setDisplayedText] = useState(''); //для хранения текста, который будет отображаться на экране после нажатия кнопки.

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    setDisplayedText(text); //копирует значение из text в displayedText
  };

  return (
    <div>
      <TextField
        label="Введите текст"
        fullWidth
        variant="outlined"
        value={text}
        onChange={handleChange}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
      >
        Отобразить текст
      </Button>
      <Typography variant="h5">{displayedText}</Typography>
    </div>
  );
}

export default TextDisplayForm;