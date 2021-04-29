import { useState, useEffect } from 'react';
import Input from './Input.js';

function RentalForm(props) {
    const [rentalFormState, setRentalFormState] = useState({
        name: '',
        email: '',
        phone_number: '',
        message: '',
        pickup_date: '',
        dropoff_date: '',

    });



    
    return (
        <form onSubmit={handleSubmit}>
            <label for="name">Full Name</label>
            <Input 
                handleChange={handleChange}
                name="name"
                placeholder="Full Name"
                type="text"
                value={rentalFormState.name}
                id="name"
            />
            <label for="email">Email</label>
            <Input 
                handleChange={handleChange}
                name="email"
                placeholder="Email"
                type="text"
                value={rentalFormState.email}
                id="email"
            />
            <label for="phoneNumber">Phone Number</label>
            <Input 
                handleChange={handleChange}
                name="phoneNumber"
                placeholder="Phone Number"
                type="text"
                value={rentalFormState.phone_number}
                id="phoneNumber"
            />
            <label for="message">Message</label>
            <Input 
                handleChange={handleChange}
                name="message"
                placeholder="Message"
                type="text"
                value={rentalFormState.message}
                id="message"
            />

            <label for="pickupDate">Pickup Date</label>
            <Input 
                handleChange={handleChange}
                name="pickupDate"
                placeholder="Pick-up Date"
                type="date"
                value={rentalFormState.pickup_date}
                id="pickupDate"
            />
            <label for="pickupDate">Drop-off Date</label>
            <Input
                handleChange={handleChange}
                name="dropoffDate"
                placeholder="Drop-off Date"
                type="date"
                value={rentalFormState.dropoff_date}
                id="dropoffDate"
            />
        </form>
    )
}

export default RentalForm;





            
