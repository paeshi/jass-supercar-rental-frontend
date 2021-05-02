const RentalTextArea = ({
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
      <label htmlFor={name}>{name}</label>
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
export default RentalTextArea;
