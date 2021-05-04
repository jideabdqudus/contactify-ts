import React from 'react'
import RegisterForm from "../components/register_form"

interface Props {
  title: string;
}

const Register: React.FC<Props> = ({title}) => {
  return (
    <div>
      <h1>Account Register</h1>
    </div>
  )
}

export default Register
