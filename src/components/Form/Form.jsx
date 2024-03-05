import React from 'react';
import { useState } from 'react';
import './Form.scss';

function Form() {
  const [inputValue, setInputValue] = useState(''); // Состояние для хранения значения input

  // Функция для обработки изменений в input
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form className="animatedForm">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Введите что-нибудь..."
      />
      {/* Можно добавить кнопку для отправки формы */}
      <button type="submit">Отправить</button>
    </form>
  );
}

export default Form;
