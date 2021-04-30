import Rentals from "./Rentals";

const RentalPage = ({ rentals, handleRentalDelete, handleRentalAdd }) => {
  return (
    <div>
      <h2>RENTALS</h2>
      <Rentals
        rentals={rentals}
        handleRentalDelete={handleRentalDelete}
        handleRentalAdd={handleRentalAdd}
      />
    </div>
  );
};
export default RentalPage;
