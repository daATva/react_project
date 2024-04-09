import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './Form.scss';

interface FormData {
  inputValue: string;
}

export const Form: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
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
};

export default Form;
