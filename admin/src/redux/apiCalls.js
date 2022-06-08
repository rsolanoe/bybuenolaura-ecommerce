import axios from "axios";
import { loginfailure, loginStart, loginSuccess, logout } from "./userSlice";

import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'

//USER LOGIN
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const {data} = await axios.post(`http://localhost:5000/api/auth/login`, user);
        if(data.isAdmin){
            dispatch(loginSuccess(data));
        } else {
            Swal.fire({
                icon: 'error',
                // title: 'Oops...',
                text: `No está autorizado`,
            })
        }
        
        
    } catch (error) {
        Swal.fire({
            icon: 'error',
            // title: 'Oops...',
            text: `${error.response.data}`,
        })
        dispatch(loginfailure());
    }
};


//USER LOGIN
export const Logout = (dispatch) => {

    dispatch(logout());

};