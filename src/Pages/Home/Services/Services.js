import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';


const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Flouride Treatment',
            description: 'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist.',
            img: fluoride
        },
        {
            id: 2,
            name: 'Flouride Treatment',
            description: 'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist.',
            img: cavity
        },
        {
            id: 3,
            name: 'Flouride Treatment',
            description: 'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist.',
            img: whitening
        }
    ]
    return (
        <div className='mt-28'>
            <div className='text-center'>
                <h3 className='text-lg font-bold text-secondary uppercase'>Services</h3>
                <h2 className='text-3xl fond-bold'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {
                    servicesData.map(service => <Service
                    key = {service.id}
                    service = {service}
                    
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;