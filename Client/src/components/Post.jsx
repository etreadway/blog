import { Card } from "../style/Card";

export const Post = (props) => {
  console.log(props.value);
  return (
    <Card>
      <h1>{props.value.title}</h1>
      <h5>
        Post: #{props.value.post_id} --- Published: {props.value.created_on}
      </h5>
      <p>{props.value.post_content}</p>
    </Card>
  );
};
