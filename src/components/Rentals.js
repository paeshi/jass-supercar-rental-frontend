import Rental from './Rental.js';

function Rentals({ rentals, handleDelete, handleUpdate }) {
    return (
      <div>
        {rentals.map(rental => 
          <Rental 
            key={rental.id} 
            rental={rental}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        )}
      </div>
    );
}

export default Rentals;
