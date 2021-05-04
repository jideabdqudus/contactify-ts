import React from "react";
import LoginForm from "../components/login_form";

interface Props {
  title: string;
}

const Login: React.FC<Props> = ({ title }) => {
  return (
    <div className="register">
      <h1 className="title-header">{title}</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
