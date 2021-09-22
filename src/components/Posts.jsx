const posts = [
  {
    id: 0,
    title: "This Is My Blog Post Title",
    content: "This is the time, date, etc... of the post.",
    date: "09/22/21",
  },
];

export const Posts = () => {
  return (
    <div>
      <h1>{posts[0].title}</h1>
      <h5>
        Post: #{posts[0].id + 1} --- Published: {posts[0].date}
      </h5>
      <p>{posts[0].content}</p>
    </div>
  );
};
