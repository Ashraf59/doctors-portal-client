import React from 'react';

const AvailableOption = ({appointmentoption, setTreatment}) => {
    const {name, price, slots} = appointmentoption;
    return (
        <div className="card shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold text-secondary text-center">{name}</h2>
          <p>{slots.length > 0? slots[0] : 'No schedule today'}</p>
          <p>{slots.length} {slots.length > 1? 'spaces' : 'space'} Available</p>
          <p><small>Price: ${price}</small></p>
          <div className="card-actions justify-center">
            <label 
            disabled = {slots.length === 0}
            htmlFor="booking-modal" 
            className="btn btn-secondary text-white"
            onClick = {()=> setTreatment(appointmentoption)}
            >Book Appointment</label>
            
          </div>
        </div>
      </div>
    );
};

export default AvailableOption;