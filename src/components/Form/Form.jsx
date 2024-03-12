import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.scss';

function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
