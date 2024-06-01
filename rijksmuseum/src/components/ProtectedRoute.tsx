import React, { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

type ProtectedRouteProps = {
  children: ReactNode;
  message: string;
};

function ProtectedRoute({ children, message }: ProtectedRouteProps) {
  //   console.log("props", props);
  const { user } = useContext(AuthContext);

  return <div>{user ? children : <NeedToLogin message={message} />}</div>;
}

export default ProtectedRoute;
//make a component out of the message -> reusable component
export function NeedToLogin({ message }) {
  return (
    <div>
      <h2>{message}</h2>
      <Link rel="stylesheet" to="/login">
        go to Login
      </Link>
    </div>
  );
}
