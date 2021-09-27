import { PostContext } from "../context/PostContext";

import { useContext, useState } from "react";

export const NewPost = () => {
  const { blogPosts, setBlogPosts } = useContext(PostContext);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(input);
  };

  return (
    <div>
      <form action="submit">
        <input type="text" onSubmit={handleSubmit} onChange={handleInput} />
        <button onClick={handleSubmit}>Make new post</button>
      </form>
    </div>
  );
};
