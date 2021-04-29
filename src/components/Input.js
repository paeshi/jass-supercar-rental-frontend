// function Input({ name, type, value, placeholder, handleChange }) {
function Input({ name, title, type, value, placeholder, handleChange }) {
  return (
    <>
      <label></label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
