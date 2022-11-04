import React, { useContext } from 'react';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const SignUp = () => {
    const {createUser, googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.log(err));
    }

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err));
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-12 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5 mx-auto">
                    <h1 className="text-4xl font-semibold text-center">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-rose-500 hover:bg-rose-600 border-none" type="submit" value="Sign Up" />

                        </div>
                    </form>
                    <div className='text-center'>
                            <p className='mt-3'>Or Sign In with</p>
                            <div className='flex gap-3 justify-center mt-2'>
                                <div className='p-2 rounded-full bg-blue-50 hover:bg-blue-100 cursor-pointer' onClick={handleGoogleSignIn}><FcGoogle></FcGoogle></div>
                                <div className='p-2 rounded-full bg-blue-50 hover:bg-blue-100 cursor-pointer'><FaLinkedinIn></FaLinkedinIn></div>
                                <div className='p-2 rounded-full bg-blue-50 hover:bg-blue-100 cursor-pointer'><FaFacebook></FaFacebook></div>
                            </div>
                        </div>
                    <p className='text-center mt-3'>Already have an account? <Link className='text-rose-500' to="/login">Login</Link> </p>
                    
                </div>
            </div>
        </div>
    );
};

export default SignUp;