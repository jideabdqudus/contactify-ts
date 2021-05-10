import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";

import { register } from "../../actions/authAction";
import { appHelpers } from "../../apphelpers/appHelpers";
import { IAuthenticate } from "../../type.d";

interface Props {}

interface FormNode {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: IAuthenticate) => state.auth);

  const [formData, setFormData] = useState<FormNode>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFinish = () => {
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      appHelpers.alertError("All fields are compulsory", 5000);
    } else if (password !== confirmPassword) {
      appHelpers.alertWarning("The passwords need to be the same", 5000);
    } else if (password.length < 8) {
      appHelpers.alertWarning("Password Length must be more than 8", 5000);
    } else if (appHelpers.validatePassword(password) === false) {
      appHelpers.alertWarning(
        "Passwords must contain at least 1 Capital letter, 1 small letter and a special character",
        5000
      );
    } else {
      dispatch(register(username, email, password));
    }
  };

  if (auth.isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const { username, email, password, confirmPassword } = formData;

  return (
    <div className="form-layout">
      <Form
        name="register_form"
        className="register_form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <label htmlFor="username">Name</label>
        <Form.Item name="username">
          <Input
            type="text"
            value={username}
            name="username"
            onChange={onChange}
          />
        </Form.Item>
        <label>Email</label>
        <Form.Item name="email">
          <Input type="email" name="email" value={email} onChange={onChange} />
        </Form.Item>
        <label>Password</label>
        <Form.Item name="password">
          <Input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </Form.Item>
        <label>Confirm Password</label>
        <Form.Item name="confirmPassword">
          <Input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block={true}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterForm;
