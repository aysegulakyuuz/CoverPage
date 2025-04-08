import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Message sent:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" type="text" {...register('name')} />
      <input
        placeholder="Email"
        type="text"
        {...register('email', {
          required: 'Email requred',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Wrong e-mail',
          },
        })}
      />
      {errors.email && <p className="error">{errors.email.message}</p>}
      <input placeholder="Phone" type="tel" {...register('phone')} />
      <textarea placeholder="Message" {...register('message')} />

      <button className="submit-button" type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
