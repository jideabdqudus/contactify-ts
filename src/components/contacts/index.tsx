import React from "react";
import { Button, Card, Badge } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

const Contacts: React.FC = () => {
  return (
    <div className="contact-layout">
      <Badge.Ribbon text="Professional">
        <Card>
          <h3>Sameerah Ajenifuja</h3>
          <p>
            <MailOutlined /> asameerah@gmail.com
          </p>
          <p>
            <PhoneOutlined /> 08092399019
          </p>
          <Button style={{backgroundColor:"green"}}>Edit</Button>
          <Button style={{backgroundColor:"red"}}>Delete</Button>
        </Card>
      </Badge.Ribbon>
    </div>
  );
};

export default Contacts;
