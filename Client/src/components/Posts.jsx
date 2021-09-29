import { Post } from "./Post";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";

export const Posts = () => {
  const { blogPosts } = useContext(PostContext);

  const postList = blogPosts.map((post) => <Post value={post} />);

  return <div>{postList}</div>;
};
