import React from "react";

const PostItem = ({ post, index, remove, edit }) => {
  return (
    <div className="p-3 mb-3" style={{ border: "1px solid orange" }}>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h5 className="fw-bold mb-0">
            {index + 1}. {post.title}
          </h5>
          <p className="mb-0"> {post.body}</p>
        </div>
        <div>
          <button
            onClick={() => edit(post.id)}
            className="btn btn-outline-danger"
          >
            Edit
          </button>
          <button
            onClick={() => remove(post.id)}
            className="btn btn-outline-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
