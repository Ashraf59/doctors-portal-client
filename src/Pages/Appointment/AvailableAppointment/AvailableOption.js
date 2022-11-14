import React from 'react';

const AvailableOption = ({appointmentoption, setTreatment}) => {
    const {name, slots} = appointmentoption;
    return (
        <div className="card shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold text-primary text-center">{name}</h2>
          <p>{slots.length > 0? slots[0] : 'No schedule today'}</p>
          <p>{slots.length} {slots.length > 1? 'spaces' : 'space'} Available</p>
          <div className="card-actions justify-center">
            <label 
            disabled = {slots.length === 0}
            htmlFor="booking-modal" 
            className="btn btn-primary text-white"
            onClick = {()=> setTreatment(appointmentoption)}
            >Book Appointment</label>
            
          </div>
        </div>
      </div>
    );
};

export default AvailableOption;