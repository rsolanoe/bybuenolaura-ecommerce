
import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({isAuth, children}) => {

    return (
        isAuth
            ? <Navigate to='/' />
            : children
    );
}

export default PrivateRoute