import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";

import { login } from "../../actions/authAction";
import { appHelpers } from "../../apphelpers/appHelpers";
import { IAuthenticate } from "../../type.d";

interface Props {}

interface FormNode {
  username: string;
  password: string;
}

const LoginForm: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: IAuthenticate) => state.auth);

  const [formData, setFormData] = useState<FormNode>({
    username: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFinish = (values: any) => {
    if (username === "" || password === "") {
      appHelpers.alertError("All fields are compulsory", 5000);
    } else {
      dispatch(login(formData));
    }
  };

  const { username, password } = formData;

  if (auth.isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="form-layout">
      <Form
        name="login_form"
        className="login_form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        {/* <label>Email</label>
         <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email" }]}
        >
          <Input type="email" name="email" onChange={onChange} value={email} />
        </Form.Item> */}
        <label>Username</label>
        <Form.Item name="username">
          <Input
            type="text"
            name="username"
            onChange={onChange}
            value={username}
          />
        </Form.Item>
        <label>Password</label>
        <Form.Item name="password">
          <Input
            type="password"
            name="password"
            onChange={onChange}
            value={password}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block={true}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
