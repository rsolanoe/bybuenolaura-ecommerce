import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { userInfo } from "../redux/userSlice";
import { addOrder } from "../redux/apiCalls";

const Carrousel = () => {
    window.scrollTo(0, 0);

    const baseurl = window.location.search
    const dispatch = useDispatch();
    const [orderInfo, setOrderInfo] = useState({})

    const {_id: userId, accessToken} = useSelector(state => state.persistedReducer.user.currentUser);
    const {products: orderItems, total: totalPrice} = useSelector(state => state.persistedReducer.cart);
    const {municipio: city, departamento, address} = useSelector(state => state.persistedReducer.user.customerInfo);

    useEffect(() => {
        const getPayuData = async () => {
            const { data } = await axios.get(
                `http://localhost:5000/api/payu${baseurl}`
            );
            setOrderInfo(data)
        };
        getPayuData();
    }, []);

    const info = {
        userId,
        orderItems,
        shippingAddress: {
            city,
            departamento,
            address
        },
        paymentMethod: orderInfo?.lapPaymentMethodType, ///VER ESTA INFO DEL HTTP.GET
        paymentResult: orderInfo?.message,///VER ESTA INFO DEL HTTP.GET
        totalPrice,
        isDelivered: false,
    }

    useEffect(() => {
        if(orderInfo?.lapPaymentMethodType && orderInfo?.message){
            addOrder(info, accessToken)
            dispatch(clearCart());
            dispatch(userInfo({}));
        }
    }, [orderInfo])

    return (
        <>
            <Container>
                <h1>PayU TEST</h1>
            </Container>
        </>
    );
};

const Container = styled.div`
    height: 80vh;
`;

export default Carrousel;
