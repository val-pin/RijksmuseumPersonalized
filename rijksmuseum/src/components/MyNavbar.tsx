import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Button } from "react-bootstrap";

function MyNavbar() {
  //use this line to get the variables of context
  const { user, login, logout } = useContext(AuthContext);
  console.log("user :>> ", user);

  const loginHandler = () => {
    console.log("click");
    login();
    console.log("user :>> ", user);
  };
  const logoutHandler = () => {
    logout();
    console.log("user :>> ", user);
  };

  return (
    <nav>
      <Link to="artworks">Artworks</Link> | <Link to="about">About</Link> |{" "}
      {user !== null ? (
        <Button onClick={logoutHandler} variant="danger">
          Logout
        </Button>
      ) : (
        <Button onClick={loginHandler}>Login</Button>
      )}
    </nav>
  );
}

export default MyNavbar;
