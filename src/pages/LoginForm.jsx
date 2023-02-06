import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, Navigate } from "react-router-dom";

import CustomInput from "../components/CustomInput";
import InvalidCredentials from "../components/errors/InvalidCredentials";
import schema from "../schemas/login-form-schema";
import callEndpoint from "../services/call-endpoint";
import Spinner from "../components/errors/Spinner";

export default function LoginForm({ cookie, setCookie }) {
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
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
    setLoading(false);
  };

  return (
    <div className="w-10/12 rounded bg-white p-5 shadow-md md:w-96">
      <FormProvider {...{ register, errors }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="m-2 text-center text-3xl font-bold">Login</h2>
          <CustomInput required disabled={false} label="Email" name="email" type="email" />
          <div className="pb-4" />
          <CustomInput required disabled={false} label="Password" name="password" type="password" />
          <button
            className="bg-primary-400 hover:bg-primary-500 my-4 mt-8 w-full cursor-pointer rounded p-2 font-bold text-gray-100"
            disabled={!isDirty || !isValid}
          >
            {loading ? <Spinner /> : <p>Log In</p>}
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
