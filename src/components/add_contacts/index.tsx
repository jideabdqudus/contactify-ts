import React, { useState } from "react";
import { Form, Input, Button, Radio, InputNumber } from "antd";

interface Props {}

interface FormNode {
  name: string;
  email: string;
  phone: number;
  contactType: string;
}

const AddContacts: React.FC<Props> = () => {
  const [formData, setFormData] = useState<FormNode>({
    name: "",
    email: "",
    phone: 0,
    contactType: "",
  });

  const onChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onHandleChange = (value: number) => {
    setFormData({ ...formData, phone: value });
  };

  const onFinish = () => {
    console.log(formData);
  };

  const { name, email, phone, contactType } = formData;

  const base: string = "Add Contact";

  return (
    <div className="add-contact-layout">
      <h1>{base}</h1>
      <Form
        name="contact_form"
        className="contact_form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input Contact Name" }]}
        >
          <Input
            type="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input Contact Email" }]}
        >
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "Please Input Contact Phone Number" },
          ]}
        >
          <InputNumber name="phone" value={phone} onChange={onHandleChange} />
        </Form.Item>

        <Form.Item>
          <code className="label-tag">Contact Type</code>
          <Form.Item>
            <Radio.Group name="contactType" value={contactType}>
              <Radio onChange={onChange} value="personal">
                Personal
              </Radio>
              <Radio value="professional" onChange={onChange}>
                Professional
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Button type="primary" htmlType="submit" block={true}>
            Add Contact
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddContacts;
