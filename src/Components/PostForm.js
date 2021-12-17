import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addPosts = () => {
    const newPost = {
      id: Date.now(),
      ...post,
    };
    create(newPost);
  };

  return (
    <div>
      <h4 className="fw-bold text-success">Add Post</h4>
      <input
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Add Post"
        className="form-control"
      />
      <input
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Add Post"
        className="form-control my-2"
      />
      <button className="btn btn-success ms-2 mb-4" onClick={addPosts}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default PostForm;
