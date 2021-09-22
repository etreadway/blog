import { Post } from "./Post";

const posts = [
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
];

const postList = posts.map((post) => <Post value={post} />);

export const Posts = () => {
  return <div>{postList}</div>;
};
