import { useEffect, useState } from "react";
import { getComments as getCommentsApi } from "../api";

const Comments = ({ currentUserId }) => {
  const [backendComments, setBackendComments] = useState([]);

  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );

  console.log("backend comments", backendComments);

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <div key={rootComment.id}>{rootComment.body}</div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
