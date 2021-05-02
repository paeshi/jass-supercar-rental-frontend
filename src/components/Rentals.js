import Rental from "./Rental";

const Rentals = ({ rentals, handleRentalDelete, handleRentalAdd }) => {
  return (
    <div className="rentals">
      {rentals.map((rental) => (
        <Rental
          key={rental.id}
          rental={rental}
          handleRentalDelete={handleRentalDelete}
          handleRentalAdd={handleRentalAdd}
        />
      ))}
    </div>
  );
};

export default Rentals;
