import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCookies } from 'react-cookie';

import CustomImput from '../CustomImput';
import schema from './schemas/signup-form-schema';
import callEndpoint from '../services/call-endpoint';

export default function LoginForm() {
  const [, setCookie] = useCookies(['user']);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
    reset
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      password: ''
    },
    mode: 'onChange',
    resolver: zodResolver(schema)
  });

  const emailWatch = watch('email');
  const passwordWatch = watch('password');
  const nameWatch = watch('name');

  const onSubmit = async () => {
    const res = await callEndpoint('POST', '/users/signup', {
      email: emailWatch,
      password: passwordWatch,
      name: nameWatch
    });

    const { token } = res;

    setCookie('user', token, { path: '/' });
    reset();
  };

  return (
    <div className="bg-gray-300 p-5 w-10/12 md:w-96 rounded">
      <FormProvider {...{ register, errors }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-center m-2 text-3xl font-bold">Sign Up</h2>
          <CustomImput name="name" label="Name" type="text" />
          <div className="pb-4" />
          <CustomImput name="email" label="Email" type="email" />
          <div className="pb-4" />
          <CustomImput name="password" label="Password" type="password" />
          <button
            type="submit"
            className="w-full mt-8 my-4 bg-primary-400 p-2 text-gray-100 rounded hover:bg-primary-500 cursor-pointer"
            disabled={!isDirty || !isValid}
          >
            Sign up
          </button>
          <div className="flex justify-center">
            <button type="button" className="text-sm">
              Login
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
