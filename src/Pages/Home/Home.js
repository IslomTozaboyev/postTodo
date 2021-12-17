import React, { useState, useMemo } from "react";
import PostForm from "../../Components/PostForm";
import PostList from "../../Components/PostList";
import Modal from "../../UI/modal";
import MySelect from "../../UI/mySelect";

const Home = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Temirov", body: "React" },
    { id: 2, title: "Safarov", body: "JavaScript" },
    { id: 3, title: "Urbek", body: "Backend-end" },
  ]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  const sortedPosts = useMemo(() => {
    if (select) {
      return [...posts].sort((a, b) => a[select].localeCompare(b[select]));
    }
    return posts;
  }, [posts, select]);

  const searchAndFilterPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [posts, search, select]);

  const changePost = (filter) => {
    setSelect(filter);
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="container shadow p-4 mt-5">
      <button onClick={() => setModal(true)} className="btn btn-success my-4">
        Open Modal
      </button>

      <div className="d-flex align-items-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="...search"
          className="form-control mb-3 me-2 w-75"
        />
        <MySelect
          defaultValue={"Tanla"}
          value={select}
          onChange={changePost}
          options={[
            { value: "title", name: "Alfabit" },
            { value: "body", name: "Til" },
          ]}
        />
      </div>

      <Modal modal={modal} setModal={setModal}>
        <PostForm create={createPost} />
      </Modal>

      <PostList posts={searchAndFilterPosts} remove={removePost} />
    </div>
  );
};

export default Home;
