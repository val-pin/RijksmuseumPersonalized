import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function SecretPage() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Secret Page</h2>
      <div>
        {" "}
        {/* {user !== null ? ( */}
        <h2>welcome : {user?.email}</h2>
        {user ? (
          <p>If you are reading this, is because you are already logged in</p>
        ) : (
          <p> If you are reading this, you're not logged in</p>
        )}
      </div>
    </div>
  );
}

export default SecretPage;
