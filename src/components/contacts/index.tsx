import React from "react";
import { Button, Card, Badge } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { IContacts } from "../../type.d";

const Contacts: React.FC = () => {
  const contactReducer = useSelector(
    (state: IContacts) => state.contactReducer
  );

  const { contacts } = contactReducer;

  return (
    <div className="contact-layout">
      {contacts.length > 0 ? (
        <div>
          {contacts.map((contact) => (
            <Badge.Ribbon text="Professional">
              <Card className="card-bg">
                <h3>{contact.name}</h3>
                <p>
                  <MailOutlined /> {contact.email}
                </p>
                <p>
                  <PhoneOutlined /> {contact.phone}
                </p>
                <Button style={{ backgroundColor: "#333" }}>Edit</Button>
                <Button style={{ backgroundColor: "red" }}>Delete</Button>
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
