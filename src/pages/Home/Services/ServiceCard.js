import React from 'react';
import {FaStar} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, img, price, title} = service;

    return (
        <div> 
            <Link to={`/checkout/${_id}`}>
            <div className="card w-96 bg-base-100 shadow-xl mb-5 mt-5 mx-auto">
            <figure><img className= 'p-1 h-60' src={img} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <div className='flex gap-3 mx-auto text-yellow-400 text-[20px]' >
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>   
                <h2 className="text-[29px] font-semibold">{title}</h2>
                <p className='font-semibold text-rose-400'>$ {price}</p>
                <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
            </div>
            </div>
            </Link>      
        </div>
    );
};

export default ServiceCard;