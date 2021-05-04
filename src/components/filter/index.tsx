import React from "react";
import { Form, Input } from "antd";

const Filter = () => {
  const onHandleChange = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="filter">
      <Form
        name="filter_contacts"
        className="filter_contacts"
        onChange={onHandleChange}
      >
        <Form.Item name="query">
          <Input type="text" name="query" placeholder="Filter Contacts.." />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Filter;
