import React, { Fragment } from "react";
import { PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";

import { logout } from "../../actions/authAction";

interface Props {
  title: string;
}

const NavBar: React.FC<Props> = ({ title }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth);

  const onClick = () => {
    dispatch(logout());
  };

  return (
    <div className="navbar">
      <nav className="navbar-bg">
        <Fragment>
          <PhoneOutlined style={{ fontSize: "30px", color: "white" }} />
          <h1>{title}</h1>
        </Fragment>
        {auth.isAuthenticated ? (
          <div className="navbar-links">
            <span className="custom-nav-link">
              {auth.profile.user.username}
            </span>
            <Link to="/" className="custom-nav-link">
              <Button onClick={onClick}>Logout</Button>
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
