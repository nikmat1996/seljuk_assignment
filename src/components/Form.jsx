import React from "react";
import "../styles/Form.css";
import Divider from "./Divider";

function Form() {
  return (
    <div className="formWrap">
      <h2>Registration Form</h2>
      <p>Register your account here</p>
      <Divider>O</Divider>
      <form>
        <div className="formGroup">
          <input type="email" name="email" id="email" placeholder="Email"/>
          <label htmlFor="email">Email</label>
        </div>
        <div className="formGroup">
          <input type="text" name="username" id="username" placeholder="Username"/>
          <label htmlFor="username">Username</label>
        </div>
        <div className="formGroup">
          <input type="password" name="password" id="password" placeholder="Password"/>
          <label htmlFor="password">Password</label>
        </div>
        <div className="formGroup">
          <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password"/>
          <label htmlFor="confirmPassword">Confirm Password</label>
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
