import Form from "./Form.js";

function Aside(props) {
  return (
    <aside>
      <h1>Reviews </h1>
      <Form handleAdd={props.handleAdd} />
    </aside>
  );
}

export default Aside;
