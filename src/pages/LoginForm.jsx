import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCookies } from "react-cookie";

import CustomInput from "../components/CustomInput";
import schema from "../schemas/login-form-schema";
import callEndpoint from "../services/call-endpoint";

export default function LoginForm() {
  const [cookie, setCookie] = useCookies(["user"]);
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

  const emailWatch = watch("email");
  const passwordWatch = watch("password");

  const renderError = (message) => (
    <div
      className="bg-red-100 border border-red-400 text-red-700 my-4 px-4 py-3 rounded text-center"
      role="alert"
    >
      <p className="font-bold">Error!</p>
      <p>{message}</p>
    </div>
  );

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

    // redirect to home
    // if (cookie) console.log('cookie', cookie);
  };

  return (
    <div className="bg-gray-300 p-5 w-10/12 md:w-96 rounded">
      <FormProvider {...{ register, errors }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-center m-2 text-3xl font-bold">Login</h2>
          <CustomInput required disabled={false} label="Email" name="email" type="email" />
          <div className="pb-4" />
          <CustomInput required disabled={false} label="Password" name="password" type="password" />
          <button
            className="w-full mt-8 my-4 bg-primary-400 p-2 text-gray-100 rounded hover:bg-primary-500 cursor-pointer"
            disabled={!isDirty || !isValid}
            type="submit"
          >
            Login
          </button>
          <div className="flex justify-center">
            <button className="text-sm" type="button">
              Sign up
            </button>
          </div>
        </form>
      </FormProvider>
      {invalidCredentials && renderError("Invalid credentials")}
    </div>
  );
}
