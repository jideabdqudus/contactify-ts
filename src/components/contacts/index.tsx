import React, { useEffect } from "react";
import { Button, Card, Badge } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { IContacts } from "../../type.d";
import {
  setCurrent,
  deleteContact,
  getContact,
} from "../../actions/contactAction";

const Contacts: React.FC = () => {
  const dispatch = useDispatch();
  const contactReducer = useSelector(
    (state: IContacts) => state.contactReducer
  );
  useEffect(() => {
    dispatch(getContact());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { contacts, filtered } = contactReducer;

  return (
    <div className="contact-layout">
      {contacts.length > 0 ? (
        <div>
          {filtered !== null
            ? filtered.map((contact) => (
                <Badge.Ribbon text={contact.type} key={contact.name}>
                  <Card className="card-bg">
                    <h3>{contact.name}</h3>
                    <p>
                      <MailOutlined /> {contact.email}
                    </p>
                    <p>
                      <PhoneOutlined /> {contact.phone}
                    </p>
                    <Button
                      style={{ backgroundColor: "#333" }}
                      onClick={() => dispatch(setCurrent(contact))}
                    >
                      Edit
                    </Button>
                    <Button
                      style={{ backgroundColor: "red" }}
                      onClick={() => dispatch(deleteContact(contact))}
                    >
                      Delete
                    </Button>
                  </Card>
                  <br />
                </Badge.Ribbon>
              ))
            : contacts.map((contact) => (
                <Badge.Ribbon text={contact.type} key={contact.name}>
                  <Card className="card-bg">
                    <h3>{contact.name}</h3>
                    <p>
                      <MailOutlined /> {contact.email}
                    </p>
                    <p>
                      <PhoneOutlined /> {contact.phone}
                    </p>
                    <Button
                      style={{ backgroundColor: "#333" }}
                      onClick={() => dispatch(setCurrent(contact))}
                    >
                      Edit
                    </Button>
                    <Button
                      style={{ backgroundColor: "red" }}
                      onClick={() => dispatch(deleteContact(contact))}
                    >
                      Delete
                    </Button>
                  </Card>
                  <br />
                </Badge.Ribbon>
              ))}
        </div>
      ) : (
        <h1>Add a Contact, It would show here!</h1>
      )}
    </div>
  );
};

export default Contacts;
