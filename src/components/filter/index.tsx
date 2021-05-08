import React, { useRef, useEffect } from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { IContacts } from "../../type.d";
import { filterContacts } from "../../actions/contactAction";

const Filter = () => {
  const text: any = useRef("");
  const dispatch = useDispatch();
  const contactReducer = useSelector(
    (state: IContacts) => state.contactReducer
  );

  useEffect(() => {
    if (contactReducer.filtered === null) {
      text.current.value = "";
    }
  });
  const onChange = (text: any) => {
    if (text.target.value !== "") {
      dispatch(filterContacts(text.target.value));
    } else {
      console.log("issue");
    }
  };

  return (
    <div className="filter">
      <Form name="filter_contacts" className="filter_contacts">
        <Form.Item name="query">
          <Input
            type="text"
            onChange={onChange}
            ref={text}
            name="text"
            placeholder="Filter Contacts.."
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Filter;
