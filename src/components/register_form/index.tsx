import React from "react";
import { Form, Input, Button } from "antd";

interface Props {}

const RegisterForm: React.FC<Props> = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="form-layout">
      <Form
        name="register_form"
        className="register_form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <label htmlFor="name">Name</label>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your name" }]}
        >
          <Input />
        </Form.Item>
        <label>Email</label>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email" }]}
        >
          <Input type="email" name="email" />
        </Form.Item>
        <label>Password</label>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password" }]}
        >
          <Input type="password" name="password" />
        </Form.Item>
        <label>Confirm Password</label>
        <Form.Item
          name="confirmPassword"
          rules={[{ required: true, message: "Please confirm your Password" }]}
        >
          <Input type="password" name="confirmPassword" />
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
