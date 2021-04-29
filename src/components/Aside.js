import ReviewForm from "./ReviewForm";

function Aside(props) {
  return (
    <aside>
      <h1>Reviews </h1>
      <ReviewForm handleAdd={props.handleAdd} />
    </aside>
  );
}

export default Aside;
