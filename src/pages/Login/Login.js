import React from 'react';
import image from '../../assets/images/login/login.svg';

const Login = () => {
    const handleSubmit =()=>{

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
                        <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-rose-500 hover:bg-rose-600 border-none">Sign In</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;