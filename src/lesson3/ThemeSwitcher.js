import React, { useState, useEffect } from 'react';

// Компонент ThemeSwitcher, который управляет переключением темы
function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Используем useEffect для изменения темы на уровне body
  useEffect(() => {
    // Применяем тему к body
    if (theme === 'dark') {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }, [theme]); // useEffect будет срабатывать при изменении theme

  return (
    <div>
      <button onClick={toggleTheme}>Переключить тему</button>
    </div>
  );
}

export default ThemeSwitcher;