import axios from "axios";
import { loginfailure, loginStart, loginSuccess, logout } from "./userSlice";
import {
    getProductfailure,
    getProductStart,
    getProductSuccess,
    deleteProductfailure,
    deleteProductStart,
    deleteProductSuccess,
} from "./productSlice";

import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";


//USER LOGIN
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const { data } = await axios.post(
            `http://localhost:5000/api/auth/login`,
            user
        );
        if (data.isAdmin) {
            dispatch(loginSuccess(data));
        } else {
            Swal.fire({
                icon: "error",
                // title: 'Oops...',
                text: `No está autorizado`,
            });
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            // title: 'Oops...',
            text: `${error.response.data}`,
        });
        dispatch(loginfailure());
    }
};

//USER LOGOUT
export const Logout = (dispatch) => {
    dispatch(logout());
};

// GET ALL PRODUCTS
export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const { data } = await axios.get(`http://localhost:5000/api/products`);
        dispatch(getProductSuccess(data));
    } catch (error) {
        dispatch(getProductfailure());
    }
};

// DELETE PRODUCT
export const deleteProduct = async (id, dispatch, token) => {
    dispatch(deleteProductStart());
    try {
        Swal.fire({
                title: '¿Estás seguro?',
                text: "¡No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Sí, borrarlo!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProductSuccess(id));
                const { data } = axios.delete(
                    `http://localhost:5000/api/products/${id}`, {
                        headers: {
                            token: `Bearer ${token}`
                        }
                    }
                );
                return Swal.fire(
                    '¡Borrado!',
                    'El producto ha sido borrado.',
                    'success'
                )
            }
          })
        
    } catch (error) {
        console.log(error)
        dispatch(deleteProductfailure());
    }
};

// GET PRODUCTS STATS
