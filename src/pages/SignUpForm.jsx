import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, Navigate } from "react-router-dom";

import CustomInput from "../components/CustomInput";
import schema from "../schemas/signup-form-schema";
import callEndpoint from "../services/call-endpoint";

export default function LoginForm({ cookie, setCookie }) {
  const [Loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  if (cookie.user) return <Navigate to="/" />;

  const emailWatch = watch("email");
  const passwordWatch = watch("password");
  const nameWatch = watch("name");

  const onSubmit = async () => {
    const res = await callEndpoint("POST", "/users/signup", {
      email: emailWatch,
      password: passwordWatch,
      name: nameWatch,
    });

    const { token } = res;

    setCookie("user", token, { path: "/" });
    reset();
  };

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <div className="bg-white p-5 w-10/12 md:w-96 rounded shadow-md">
      <FormProvider {...{ register, errors }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-center m-2 text-3xl font-bold">Sign Up</h2>
          <CustomInput label="Name" name="name" type="text" />
          <div className="pb-4" />
          <CustomInput label="Email" name="email" type="email" />
          <div className="pb-4" />
          <CustomInput label="Password" name="password" type="password" />
          <button
            className="w-full mt-8 my-4 bg-primary-400 p-2 text-gray-100 font-bold rounded hover:bg-primary-500 cursor-pointer"
            disabled={!isDirty || !isValid}
            onClick={handleClick}
            type="submit"
          >
            {Loading ? <p> loading ...</p> : <p>Sign in</p>}
          </button>

          <div className="flex justify-center">
            <Link className="text-sm text-center" to="/login">
              Login
            </Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
