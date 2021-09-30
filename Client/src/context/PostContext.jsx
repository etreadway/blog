import { createContext, useState, useEffect } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const [realPosts, setRealPosts] = useState([]);

  const makeAPICall = async () => {
    try {
      const response = await fetch("http://localhost:5000", { mode: "cors" });
      const data = await response.json();
      setRealPosts(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    makeAPICall();
  }, []);

  const DUMMY_POSTS = [
    {
      id: 0,
      title: "This Is My Blog Post Title",
      content: "This is the thing I want to blog about.",
      date: "09/22/21",
    },
    {
      id: 1,
      title: "Another Title",
      content: "This is something else I want to blog about.",
      date: "09/22/21",
    },
    {
      id: 2,
      title: "New Title",
      content: "This is a 3rd blog post.",
      date: "09/24/21",
    },
  ];

  const [blogPosts, setBlogPosts] = useState(DUMMY_POSTS);

  return (
    <PostContext.Provider value={{ blogPosts, setBlogPosts, realPosts }}>
      {props.children}
    </PostContext.Provider>
  );
};
