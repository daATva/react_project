import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.scss';

function Form() {
  const { register, handleSubmit } = useForm();

  // Функция для обработки отправки формы
  const onSubmit = (data) => {
    console.log(data);
    // Можно добавить логику для отправки данных на сервер
  };

  return (
    <form className="animatedForm" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register('inputValue', { required: true })}
        placeholder="Введите что-нибудь..."
      />
      <button type="submit">Отправить</button>
    </form>
  );
}

export default Form;
