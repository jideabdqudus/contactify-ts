import React, { useState } from "react";
import { Form, Input, Button } from "antd";

interface Props {}

interface FormNode {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC<Props> = () => {
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
    console.log(formData);
  };

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
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your name" }]}
        >
          <Input
            type="text"
            value={username}
            name="username"
            onChange={onChange}
          />
        </Form.Item>
        <label>Email</label>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email" }]}
        >
          <Input type="email" name="email" value={email} onChange={onChange} />
        </Form.Item>
        <label>Password</label>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password" }]}
        >
          <Input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </Form.Item>
        <label>Confirm Password</label>
        <Form.Item
          name="confirmPassword"
          rules={[{ required: true, message: "Please confirm your Password" }]}
        >
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
