import React, { useState, useEffect } from "react";
import { Form, Input, Button, Radio, InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { IContact, IContacts } from "../../type.d";
import { addContact, editContact,} from "../../actions/contactAction";

interface Props {}

const AddContacts: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const contactReducer = useSelector(
    (state: IContacts) => state.contactReducer
  );

  const { current } = contactReducer;

  const [formData, setFormData] = useState<IContact>({
    name: "",
    email: "",
    phone: 0,
    contactType: "",
  });

  useEffect(() => {
    if (current !== null) {
      setFormData(current);
    } else {
      setFormData({
        name: "",
        email: "",
        phone: 0,
        contactType: "personal",
      });
    }
  }, [contactReducer, current]);

  const onChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onHandleChange = (value: number) => {
    setFormData({ ...formData, phone: value });
  };

  const onFinish = () => {
    if (current == null) {
      dispatch(addContact(formData));
    } else {
      dispatch(editContact(formData));
    }
    console.log("errorrr")
    //dispatch(clearAll());
  };

  const { name, email, phone, contactType } = formData;

  return (
    <div className="add-contact-layout">
      <h1> {current == null ? "Add Contact" : "Update Contact"}</h1>
      <Form
        name="contact_form"
        className="contact_form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          // rules={[{ required: true, message: "Please input Contact Name" }]}
        >
          {console.log({ name })}
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
          //rules={[{ required: true, message: "Please input Contact Email" }]}
        >
          {console.log({ email })}
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
          // rules={[
          //   { required: true, message: "Please Input Contact Phone Number" },
          // ]}
        >
          {console.log({ phone })}
          <InputNumber
            name="phone"
            value={phone}
            onChange={onHandleChange}
            style={{ width: "100%" }}
            placeholder="Phone"
          />
        </Form.Item>

        <Form.Item>
          <code className="label-tag">Contact Type</code>
          <Form.Item>
            <Radio.Group name="contactType" value={contactType}>
              <Radio onChange={onChange} value="Personal">
                Personal
              </Radio>
              <Radio value="Professional" onChange={onChange}>
                Professional
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Button type="primary" htmlType="submit" block={true}>
            {current == null ? "Add Contact" : "Update Contact"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddContacts;
