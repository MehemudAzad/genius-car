import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    //[] means that this will be called only once
    //having no dependency means that it will be called infinite times
    //having dependency means it will be called every time there is a change in the dependency
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    console.log(services);

    return (
        <div>
            <div className='text-center '>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services?.map(service =><ServiceCard 
                    key={service?._id}
                    service={service}>
                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;