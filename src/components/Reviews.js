const Reviews = ({
  name,
  vehicle_name,
  id,
  date_rented,
  description,
  rating,
  handleAdd,
}) => {
  return (
    <>
      <hr />

      <h3>{name}</h3>
      <h3>Supercar: {vehicle_name}</h3>
      <h3>Date rented: {date_rented}</h3>
      <h3>Review: {description}</h3>
      <h3>Rating: {rating}</h3>
      <hr />
    </>
  );
};

export default Reviews;
