import React from "react";
import { Link } from "react-router-dom";

function ProtectedRoute({ children, message }) {
  //   console.log("props", props);
  const a = 2;
  return <div>{a === 1 ? children : <NeedToLogin message={message} />}</div>;
}

export default ProtectedRoute;

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
