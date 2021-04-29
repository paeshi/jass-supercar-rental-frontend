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