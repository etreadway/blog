import { Card } from "../style/Card";

export const Post = (props) => {
  console.log(props.value);
  return (
    <Card>
      <h1>{props.value.title}</h1>
      <h5>
        Post: #{props.value.id + 1} --- Published: {props.value.date}
      </h5>
      <p>{props.value.content}</p>
    </Card>
  );
};
