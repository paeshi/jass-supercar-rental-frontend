import RentalForm from './Form.js';

function Rental(props) {
    return (
        <div className="RentalPage">
            <div className="container">
                <RentalImg />

                <RentalForm handleAdd={handleAdd} />

            </div>
        </div>
    );
}

export default Rental;





