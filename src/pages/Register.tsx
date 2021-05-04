import React from "react";
import RegisterForm from "../components/register_form";

interface Props {
  title: string;
}

const Register: React.FC<Props> = ({ title }) => {
  return (
    <div className="register">
      <h1 className="title-header">{title}</h1>
      <RegisterForm />
    </div>
  );
};

export default Register;
