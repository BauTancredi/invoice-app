import React from 'react';
import { useFormContext } from 'react-hook-form';

const formValidation = (errors, errorKey) => {
  if (errors[errorKey]) {
    return (
      <div className="text-red-500 text-sm">{errors[errorKey].message}</div>
    );
  }
  return null;
};

// eslint-disable-next-line react/prop-types
export default function CustomImput({ name, label, type }) {
  const { register, errors } = useFormContext();
  //   const hasError = errors && errors[name];
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register(name)}
      />
      {errors && formValidation(errors, name)}
    </div>
  );
}
