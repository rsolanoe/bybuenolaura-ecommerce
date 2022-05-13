
import axios from "axios";

import { loginfailure, loginStart, loginSuccess } from "./userSlice";

export const login = async (dispatch, user) => {
    console.log(user)
    console.log(user.username)
    console.log(user.password)
    dispatch(loginStart());
    try {
        const {data} = await axios.post('http://localhost:5000/api/auth/login', user);
        dispatch(loginSuccess(data));
    } catch (error) {
        console.log(error)
        dispatch(loginfailure());
    }
};
