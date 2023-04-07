import React from "react";
import "./Nav.css";
import { useContext } from "react";
import Context from "./Context";

const Nav = () => {
  const { setLogin, user } = useContext(Context);
  return (
    <div className="nav">
      <div className="title">FaceBook</div>
      <div className="menu">
        <a href="/#">Home</a>
        <a href="/#">Friends</a>
        <a href="/#">Notifications</a>
        <a href="/#">Messenger</a>
        <button
          onClick={() => {
            setLogin(false);
          }}
        >
          LogOut
        </button>
        <span style={{ color: "yellow", marginLeft: "20px" }}>{user.name}</span>
      </div>
    </div>
  );
};

export default Nav;
