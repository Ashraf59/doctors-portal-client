import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BokkingModal/BookingModal';
import AvailableOption from './AvailableOption';

const AvailableAppointment = ({selectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const {data:appointmentOptions = []} = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/appointmentOptions')
            const data = await res.json();
            return data;
        }
    })

        //amra data load useEffect er poriborte useQuery diye koreci.
    // useEffect(() =>{
    //     fetch('http://localhost:5000/appointmentOptions')
    //     .then(res => res.json())
    //     .then(data => setAppointmentOptions(data))

    // },[])
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
            {
                appointmentOptions.map(option => <AvailableOption
                key = {option._id}
                appointmentoption = {option}
                setTreatment = {setTreatment}
                ></AvailableOption>)
            }
            </div>
           {
            treatment &&
             <BookingModal
             treatment = {treatment}
             selectedDate = {selectedDate}
             setTreatment = {setTreatment}
             ></BookingModal>
           }
        </section>
    );
};

export default AvailableAppointment;