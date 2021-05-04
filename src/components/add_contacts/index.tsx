import React from "react";
import { Form, Input, Button, Radio } from "antd";

interface Props {}

const AddContacts: React.FC<Props> = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="add-contact-layout">
      <h1>Add Contact</h1>
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
          <Input type="name" name="name" placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input Contact Email" }]}
        >
          <Input type="email" name="email" placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "Please Input Contact Phone Number" },
          ]}
        >
          <Input type="number" name="phone" placeholder="Phone" />
        </Form.Item>

        <Form.Item>
          <code className="label-tag">Contact Type</code>
          <Form.Item name="contactType">
            <Radio.Group>
              <Radio value="personal">Personal</Radio>
              <Radio value="professional">Professional</Radio>
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
