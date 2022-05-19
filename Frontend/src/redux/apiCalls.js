import axios from "axios";
import { getProductfailure, getProductStart, getProductSuccess } from "./productSlice";
import { registerfailure, registerStart, registerSuccess } from "./registerSlicer";
import { productDetailfailure, productDetailStart, productDetailSuccess } from "./singleProductSlice";
import { loginfailure, loginStart, loginSuccess } from "./userSlice";


//USER LOGIN
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const {data} = await axios.post('http://localhost:5000/api/auth/login', user);
        dispatch(loginSuccess(data));
    } catch (error) {
        console.log(error)
        dispatch(loginfailure());
    }
};


//USER REGISTER
export const register = async (dispatch, user) => {
    dispatch(registerStart());///TOCA HACER ESTE SLICE
    try {
        const {data} = await axios.post('http://localhost:5000/api/auth/register', user);
        console.log(data)
        dispatch(loginSuccess(data));
    } catch (error) {
        console.log(error)
        dispatch(registerfailure()); ///TOCA HACER ESTE SLICE
    }
};


// GET ALL PRODUCTS
export const getProducts = async (dispatch, category) => {
    dispatch(getProductStart());
    try {
        if (category) {
            const { data } = await axios.get(`http://localhost:5000/api/products?category=${category}`);
            dispatch(getProductSuccess(data))
        } else {
            const { data } = await axios.get('http://localhost:5000/api/products')
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
        const { data } = await axios.get(`http://localhost:5000/api/products/find/${id}`);
        dispatch(productDetailSuccess(data))
    } catch (error) {
        dispatch(productDetailfailure())
    }
}


// USER DETAILS
