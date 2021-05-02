import Rentals from "./Rentals";
import RentalForm from "./RentalForm";

const RentalPage = ({ rentals, handleRentalDelete, handleRentalAdd }) => {
  return (
    <div className="rentals-container">
      <h2 className="rental-banner">Rental Form:</h2>
      <RentalForm
        rentals={rentals}
        handleRentalDelete={handleRentalDelete}
        handleRentalAdd={handleRentalAdd}
      />

      <Rentals
        rentals={rentals}
        handleRentalDelete={handleRentalDelete}
        handleRentalAdd={handleRentalAdd}
      />
    </div>
  );
};
export default RentalPage;
