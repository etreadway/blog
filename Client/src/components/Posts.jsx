import { Post } from "./Post";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";

export const Posts = () => {
  const { blogPosts, realPosts } = useContext(PostContext);

  console.log("hello from posts", realPosts);

  const postList = realPosts.map((post) => <Post value={post} />);

  return <div>{postList}</div>;
};
