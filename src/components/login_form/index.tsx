import React from "react";
import { Form, Input, Button } from "antd";

interface Props {
  
}

const LoginForm: React.FC<Props> = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="form-layout">
      <Form
        name="login_form"
        className="login_form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
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
