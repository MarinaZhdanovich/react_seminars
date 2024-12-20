// Создайте маленькое приложение со страницей списка
// (ListPage) и страницей деталей (DetailPage).
// На ListPage отобразите список элементов (например, статей или
// продуктов), где каждый элемент является ссылкой на
// DetailPage, содержащую детальную информацию об элементе.
// Используйте react-router-dom для настройки маршрутизации.
// На DetailPage используйте useParams для извлечения
// параметра из URL (например, ID элемента) и отобразите
// детальную информацию об элементе.

import React from 'react'
import { useParams } from "react-router-dom";

const DetailPage = ({ items }) => {
  const { id } = useParams();
  const item = items.find(item => item.id === parseInt(id));

  if (!item) {
    return <div>Статья не найдена</div>
  }

  return (
    <div>
      <h2>{item.name}</h2>
    </div>
  )
}

export default DetailPage;