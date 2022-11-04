import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

export const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location  = useLocation();

    if(loading) {
        return <h1 className='text-5xl'>Loading...</h1>
    }
    // console.log(user);
    if(user){
        return children;
    }

    // state name er ekata props e from namok property te location ta set korsi
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;

};

// export default PrivateRoute;