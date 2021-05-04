import React, { Fragment } from "react";
import { PhoneOutlined } from "@ant-design/icons";

interface Props {
  title: string;
}

const NavBar: React.FC<Props> = ({ title }) => {
  return (
    <div className="navbar">
      <nav className="navbar-bg">
        <Fragment>
          <h1>
            <PhoneOutlined />
            {title}
          </h1>
        </Fragment>
        <div className="navbar-links">
          <span>Register</span>
          <span>Login</span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
