import axios from "axios";
import { useSelector } from "react-redux";
import { getProductfailure, getProductStart, getProductSuccess } from "./productSlice";
import { registerfailure, registerStart } from "./registerSlicer";
import { productDetailfailure, productDetailStart, productDetailSuccess } from "./singleProductSlice";
import { userDetailsfailure, userDetailsStart, userOrder } from "./userDetailsSlice";
import { loginfailure, loginStart, loginSuccess } from "./userSlice";

import Swal from "sweetalert2";



const BASE_URL = process.env.REACT_APP_API_URL

//USER LOGIN
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const {data} = await axios.post(`${BASE_URL}auth/login`, user);
        dispatch(loginSuccess(data));
    } catch (error) {
        dispatch(loginfailure());
        return Swal.fire({
            icon: 'error',
            // title: 'Oops...',
            text: `${error.response.data}`,
        })
    }
};


//USER REGISTER
export const register = async (dispatch, user) => {
    dispatch(registerStart());///TOCA HACER ESTE SLICE
    try {
        const {data} = await axios.post(`${BASE_URL}auth/register`, user);
        dispatch(loginSuccess(data));
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.response.data}`,
        })
        dispatch(registerfailure()); ///TOCA HACER ESTE SLICE
    }
};


// ADD ORDER
export const addOrder = async (orderInfo, token, dispatch) => {

    const options = {
        headers: {
            token: `Bearer ${token}`
        }
    }

    dispatch(userDetailsStart())
    try {
        const { data } = await axios.post(`${BASE_URL}orders`, orderInfo, options)
        dispatch(userOrder(orderInfo))
        console.log(data)
    } catch (error) {
        dispatch(userDetailsfailure());
        console.log(error)
    }

}

// GET ALL PRODUCTS
export const getProducts = async (dispatch, category = null) => {
    dispatch(getProductStart());
    try {
        if (category) {
            const { data } = await axios.get(`${BASE_URL}products?category=${category}`);
            dispatch(getProductSuccess(data))
        } else {
            const { data } = await axios.get(`${BASE_URL}products`)
            dispatch(getProductSuccess(data))
        }
    } catch (error) {
        dispatch(getProductfailure())
    }
}


// GET SINGLE PRODUCTS
export const productDetails = async (dispatch, id) => {
    dispatch(productDetailStart())
    try {
        const { data } = await axios.get(`${BASE_URL}products/find/${id}`);
        dispatch(productDetailSuccess(data))
    } catch (error) {
        dispatch(productDetailfailure())
    }
}
