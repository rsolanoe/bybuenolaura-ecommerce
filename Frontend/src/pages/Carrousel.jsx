import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { userInfo } from "../redux/userSlice";

const Carrousel = () => {
    window.scrollTo(0, 0);

    const baseurl = window.location.search
    const dispatch = useDispatch();

    useEffect(() => {
        const getPayuData = async () => {
            const { data } = await axios.get(
                `http://localhost:5000/api/payu${baseurl}`
            );
            // const { data } = await axios.get(
            //     `http://localhost:5000/api/payu?merchanId=508029&transactionState=4&referenceCode=PAGOTESTBYBUENOLAURAtest2&TX_VALUE=75000.00&currency=COP`
            // );
            console.log(data);
            dispatch(clearCart());
            dispatch(userInfo({}))
        };
        getPayuData();
    }, []);

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
