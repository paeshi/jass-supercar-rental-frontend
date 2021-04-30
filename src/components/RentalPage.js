import Rentals from "./Rentals";
import RentalForm from "./RentalForm";

const RentalPage = ({ rentals, handleRentalDelete, handleRentalAdd }) => {
  return (
    <div>
      <h2>RENTALS</h2>
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
