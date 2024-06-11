import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function CommentsSection() {
  //you need to receive here the object number.
  //use that object number to fetch the comments in your database (the comments with that object number)
  //use this line to get the variables of context

  const { user } = useContext(AuthContext);

  const arrayOfComments = ["Such a cool artwork", "I dont like it"];
  return (
    <div>
      <InputArea />
      {arrayOfComments &&
        arrayOfComments.map((comment) => {
          return <SingleComment comment={comment} />;
        })}
      {!arrayOfComments && <h3>You need to login to see the messages!</h3>}
    </div>
  );
}

export default CommentsSection;

// create a component out of the following:

function SingleComment({ comment }: string) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p>comment from: [user]</p>
      <p>{comment}</p>
    </div>
  );
}
// create another component out of the following:

function InputArea() {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <input type="text" value="" />
      <button>Send</button>
    </div>
  );
}
