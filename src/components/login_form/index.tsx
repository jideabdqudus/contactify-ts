import React, { useState } from "react";
import { Form, Input, Button } from "antd";

interface Props {}

interface FormNode {
  email: string;
  password: string;
}

const LoginForm: React.FC<Props> = () => {
  const [formData, setFormData] = useState<FormNode>({
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFinish = (values: any) => {
    console.log(formData);
  };

  const { email, password } = formData;

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
          <Input type="email" name="email" onChange={onChange} value={email} />
        </Form.Item>
        <label>Password</label>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password" }]}
        >
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
