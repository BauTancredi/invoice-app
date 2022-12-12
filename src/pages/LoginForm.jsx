import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, Navigate } from "react-router-dom";

import CustomInput from "../components/CustomInput";
import InvalidCredentials from "../components/errors/InvalidCredentials";
import schema from "../schemas/login-form-schema";
import callEndpoint from "../services/call-endpoint";

export default function LoginForm({ cookie, setCookie }) {
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  if (cookie.user) return <Navigate to="/" />;

  const emailWatch = watch("email");
  const passwordWatch = watch("password");

  const onSubmit = async () => {
    const res = await callEndpoint("POST", "/users/login", {
      email: emailWatch,
      password: passwordWatch,
    });

    if (res === 401) {
      setInvalidCredentials(true);

      return;
    }

    if (invalidCredentials) setInvalidCredentials(false);

    const { token } = res;

    setCookie("user", token, { path: "/" });
    reset();
  };

  return (
    <div className="p-5 bg-white w-10/12 md:w-96 rounded">
      <FormProvider {...{ register, errors }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-center m-2 text-3xl font-bold">Login</h2>
          <CustomInput required disabled={false} label="Email" name="email" type="email" />
          <div className="pb-4" />
          <CustomInput required disabled={false} label="Password" name="password" type="password" />
          <button
            className="w-full mt-8 my-4 bg-primary-400 p-2 text-gray-100 font-bold rounded hover:bg-primary-500 cursor-pointer"
            disabled={!isDirty || !isValid}
            type="submit"
          >
            Login
          </button>
          <div className="flex justify-center">
            <Link className="text-sm" to="/signup">
              Sign up
            </Link>
          </div>
        </form>
      </FormProvider>
      {invalidCredentials && <InvalidCredentials message="Invalid credentials" />}
    </div>
  );
}
