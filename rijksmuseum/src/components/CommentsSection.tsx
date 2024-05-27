import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function CommentsSection() {
  //use this line to get the variables of context

  const { user } = useContext(AuthContext);

  return (
    <div>
      <div>
        <h1>COMMENTS SECTION</h1>
      </div>
      {user !== null ? (
        <>
          {/* here should be the comments section component */}
          {/* <CommentsSection></CommentsSection> */}
          <div>
            <p>user1@emial.com</p>
            <p>1/1/2024</p>
            <p>Such a cool Vuur</p>
          </div>
          <hr />
          <div>
            <p>user2@emial.com</p>
            <p>2/2/2024</p>
            <p>I dont like it</p>
          </div>
        </>
      ) : (
        <h3>You need to login to see the messages</h3>
      )}
    </div>
  );
}

export default CommentsSection;
