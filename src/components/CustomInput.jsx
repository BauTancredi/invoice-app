import React from "react";
import { useFormContext } from "react-hook-form";

const errorMessage = (errors, errorKey) => {
  if (errors[errorKey]) {
    return <div className="text-red-500 text-sm">{errors[errorKey].message}</div>;
  }

  return null;
};

export default function CustomImput({ name, label, type }) {
  const { register, errors } = useFormContext();

  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} {...register(name)} />
      {errors && errorMessage(errors, name)}
    </div>
  );
}
