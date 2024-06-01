import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function CommentsSection() {
  //use this line to get the variables of context

  const { user } = useContext(AuthContext);

  return (
    <div>
      <div>
        <h2>Comments section</h2>
      </div>
      {user !== null ? (
        <>
          <div>
            <p>1/1/2024</p>
            <p>Such a cool Vuur</p>
          </div>
          <hr />
          <div>
            <p>2/2/2024</p>
            <p>I dont like it</p>
          </div>
        </>
      ) : (
        <h3>You need to login to see the messages!</h3>
      )}
    </div>
  );
}

export default CommentsSection;
