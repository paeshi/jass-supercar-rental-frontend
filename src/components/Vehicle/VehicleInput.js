function VehicleInput({ 
  make, 
  model, 
  year, 
  price, 
  img_url, 
  availability, 
  value, 
  placeholder, 
  handleVehicleChange }) {
    return (
      <>
        <label htmlFor={make}>{model}</label>
        <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleVehicleChange}
        placeholder={placeholder}
        />
      </>
    );
}

export default VehicleInput;