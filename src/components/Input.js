<<<<<<< HEAD
function Input({ 
    name, 
    email, 
    phone_number, 
    message, 
    pickup_date,
    dropoff_date, 
    handleChange 
}) {
      return (
        <>
          <label htmlFor={name}>{title}</label>
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
=======
function Input({ name, title, type, value, placeholder, handleChange }) {
  return (
    <>
      <label htmlFor={name}>{title}</label>
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
>>>>>>> 73a54548c44ba409a25571896c19354703a9589e
