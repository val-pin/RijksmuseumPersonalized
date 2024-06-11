import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Button } from "react-bootstrap";

function MyNavbar() {
  //use this line to get the variables of context
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

  return (
    <nav>
      <Link to="artworks">Artworks</Link> | <Link to="about">About</Link> |
      {/* <Link to="login">Login</Link> | */}{" "}
      <Link to="registration">Registration</Link> |{" "}
      {user ? (
        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Link to="login">Login</Link>
      )}{" "}
    </nav>
  );
}

export default MyNavbar;
