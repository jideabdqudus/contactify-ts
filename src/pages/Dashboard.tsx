import React from "react";
import AddContacts from "../components/add_contacts/index";
import Filter from "../components/filter/index";
import Contacts from "../components/contacts";

import { Row, Col } from "antd";

const Dashboard: React.FC = () => {
  return (
    <div className="container">
      <Row>
        <Col span={11}>
          <AddContacts />
        </Col>
        <Col span={3}></Col>
        <Col span={9}>
          <Filter />
          <Contacts />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
