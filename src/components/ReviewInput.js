function ReviewInput({
  name,
  title,
  type,
  min,
  max,
  value,
  placeholder,
  handleChange,
}) {
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
        min={min}
        max={max}
      />
    </>
  );
}

export default ReviewInput;
