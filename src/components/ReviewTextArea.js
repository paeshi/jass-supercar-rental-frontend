const ReviewTextArea = ({
  name,
  title,
  type,
  min,
  max,
  value,
  placeholder,
  handleChange,
}) => {
  return (
    <>
      <label></label>
      <textarea
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
};
export default ReviewTextArea;
