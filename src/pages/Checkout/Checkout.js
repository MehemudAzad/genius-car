import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Checkout = () => {
        const { _id, title, price } = useLoaderData();
        const { user } = useContext(AuthContext);
    
        const handlePlaceOrder = event => {
            //default reload behavior when we use onSubmit eventhandlers
            event.preventDefault();
            //calling the form with event.target
            const form = event.target;
            //firstname and lastname add kore fullname banano joss
            const name = `${form.firstName.value} ${form.lastName.value}`;
            //going inside the form and then calling the name of the input and then .value to get the value
            const email = user?.email || 'unregistered';
            const phone = form.phone.value;
            const message = form.message.value;
            
            //this is very important, but often overlooked. Here we are creating an object named order than passing it using the post api method. This is how we generally create object to store future value.
            const order = {
                service: _id,
                serviceName: title,
                price,
                customer: name,
                email,
                phone,
                message
            }
    
            // if(phone.length > 10){
            //     alert('Phone number should be 10 characters or longer')
            // }
            // else{
    
            // }
    
            //post api
            fetch('https://genius-car-server-iota-black.vercel.app/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.acknowledged){
                        alert('Order placed successfully');
                    }
                })
                .catch(er => console.error(er));

            //reseting the form after it has been submitted
                form.reset();
        }
    
        return (
            <div>
                <form onSubmit={handlePlaceOrder} className="p-8 rounded-xl bg-gray-100 my-12">
                    <h2 className="text-4xl">You are about to order: {title}</h2>
                    <h4 className="text-3xl">Price: {price}</h4>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered bg-white mt-5" />
                        <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered bg-white mt-5" />
                        <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered bg-white my-5" required />
                        <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered bg-white my-5" readOnly />
                    </div>
                    <textarea name="message" className="textarea textarea-bordered h-24 w-full my-5" placeholder="Your Message" required></textarea>
    
                    <input className='btn w-full mt-5 bg-[#FF3811] border-none hover:bg-[#ce3010]' type="submit" value="Order Confirm" />
                </form>
            </div>
        );
    };

export default Checkout;