import React from "react";
import "../styles/Form.css";
import Divider from "./Divider";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submit form! ", data);
    alert(JSON.stringify(data))
  };

  return (
    <div className="formWrap">
      <h2>Registration Form</h2>
      <p>Register your account here</p>
      <Divider>O</Divider>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="formGroup">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[\w\.-]+@[\w\.-]+\.\w+$/,
                message: "Wrong format.",
              },
            })}
          />
          <label htmlFor="email">Email</label>
          <p className="errorMsg">{errors.email?.message}</p>
        </div>
        <div className="formGroup">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            {...register("username", { required: "Username required." })}
          />
          <label htmlFor="username">Username</label>
          <p className="errorMsg">{errors.username?.message}</p>
        </div>
        <div className="formGroup">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            {...register("password", { required: "Enter password", minLength: {
              value: 6,
              message: "Minimum 6."
            }})}
          />
          <label htmlFor="password">Password</label>
          <p className="errorMsg">{errors.password?.message}</p>
        </div>
        <div className="formGroup">
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            {...register("confirmPassword", { 
              required: true,
              validate: (value) => value === watch("password") || "Passwords do not match"
            })}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <p className="errorMsg">{errors.confirmPassword?.message}</p>

        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      <p className="formLink">Olvidé mi contraseña</p>
      <Divider>o</Divider>
      <h3>¿Aún no tienes una cuenta?</h3>
      <p className="formLink">Crea una aquí</p>
    </div>
  );
}

export default Form;
