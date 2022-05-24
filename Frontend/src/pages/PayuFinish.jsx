import React, {useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

const PayuFinish = () => {
    window.scrollTo(0, 0);

    useEffect(() => {
        const getPayuData = async () => {
            const { data } = await axios.post(
                `https://bybuenolaurae.herokuapp.com/api/payu/finish`,{
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            );
            console.log(data);
        };
        getPayuData();
    }, []);

    return (
        <>
            <Container>
                <h1>PayU FINISH TEST</h1>
            </Container>
        </>
    );
};

const Container = styled.div`
    height: 80vh;
`;

export default PayuFinish;