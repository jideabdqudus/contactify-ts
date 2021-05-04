import React from "react";
import { Form, Input, Button } from "antd";

interface Props {}

const RegisterForm: React.FC<Props> = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <Form
        name="register_form"
        className="register_form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your name" }]}
        >
          <label>Name</label>
          <Input type="text" name="name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email" }]}
        >
          <label>Email</label>
          <Input type="email" name="email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <label>Password</label>
          <Input type="password" name="password" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <label>Confirm Password</label>
          <Input type="password" name="confirmPassword" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterForm;
