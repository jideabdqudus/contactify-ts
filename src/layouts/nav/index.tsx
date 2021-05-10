import React, { Fragment } from "react";
import { PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { IAuthenticate } from "../../type.d";

interface Props {
  title: string;
}

const NavBar: React.FC<Props> = ({ title }) => {
  const auth = useSelector((state: IAuthenticate) => state.auth);
  {
    console.log(auth.profile.user.username);
  }
  return (
    <div className="navbar">
      <nav className="navbar-bg">
        <Fragment>
          <PhoneOutlined style={{ fontSize: "30px", color: "white" }} />
          <h1>{title}</h1>
        </Fragment>
        {auth.isAuthenticated ? (
          <div className="navbar-links">
            <Link to="/register" className="custom-nav-link"></Link>
            <Link to="/" className="custom-nav-link">
              Logout
            </Link>
          </div>
        ) : (
          <div className="navbar-links">
            <Link to="/register" className="custom-nav-link">
              Register
            </Link>
            <Link to="/" className="custom-nav-link">
              Login
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
