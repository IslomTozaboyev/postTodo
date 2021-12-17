import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, remove }) => {
  const editPost = (id) => {
    console.log(posts[id].title);
  };
  if (!posts.length) {
    return (
      <h3 className="fw-bold text-center text-danger mt-4">Not Found !!!</h3>
    );
  }
  return (
    <>
      <h3 className="fw-bold mb-3">Todo App</h3>
      {posts?.map((post, index) => {
        return (
          <PostItem
            key={post.id}
            post={post}
            remove={remove}
            edit={editPost}
            index={index}
          />
        );
      })}
    </>
  );
};

export default PostList;
