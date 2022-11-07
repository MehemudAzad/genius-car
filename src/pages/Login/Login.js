import React, { useContext, useState } from 'react';
import image from '../../assets/images/login/login.svg';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import SocialLogin from '../shared/SocialLogin';
import { setAuthToken } from '../../api/auth';

const Login = () => {
    const [error, setError] = useState(null);
    const {googleSignIn, login} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname|| '/';
    
    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user);

            //getting the jwt token 
            setAuthToken(user);  

            navigate(from, {replace:true});
        })
        .catch(err => {
            console.log(err);
            setError(err.message );
        });
     
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then((result)=>{
            const user = result.user;
            console.log(user.email);
            setAuthToken(user);
            //navigate
            navigate(from, {replace:true});
        })
        .catch(err => {
            console.log(err);
            setError(err.message );
        });
    }
    return (
        <div>
            <div className="hero w-full">
                <div className="hero-content grid md:grid-cols-2 gap-4 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='p-24' src={image} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm border-2 bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                    <h1 className="text-4xl font-semibold text-center">Login</h1>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <p className='text-rose-500'>{error}</p>
                        <div className="form-control mt-6">
                        <button type='submit' className="btn bg-rose-500 hover:bg-rose-600 border-none">Sign In</button>
                        </div>
                        <div className='text-center'>
                            <p className='mt-3'>Or Sign In with</p>
                            <div className='flex gap-3 justify-center mt-2'>
                                <div className='p-2 rounded-full bg-blue-50 hover:bg-blue-100 cursor-pointer' onClick={handleGoogleSignIn}><FcGoogle></FcGoogle></div>
                                <div className='p-2 rounded-full bg-blue-50 hover:bg-blue-100 cursor-pointer'><FaLinkedinIn></FaLinkedinIn></div>
                                <div className='p-2 rounded-full bg-blue-50 hover:bg-blue-100 cursor-pointer'><FaFacebook></FaFacebook></div>
                            </div>
                        </div>
                        <p className='text-center mt-3'>Create new account. <Link className='text-rose-500' to="/signup">Sign Up</Link></p>
                    </form>
                        {/* <SocialLogin></SocialLogin> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;