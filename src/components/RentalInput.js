function RentalInput({ name, type, value, placeholder, handleChange }) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
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

export default RentalInput;
