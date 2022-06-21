import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { userInfo } from "../redux/userSlice";
import { addOrder } from "../redux/apiCalls";
import Footer from "../components/Footer";
import { mobile } from '../responsive';
import { userOrder } from "../redux/userDetailsSlice";
import LoadingSpinner from "../components/LoadingError/LoadingSpinner";

const BASE_URL = process.env.REACT_APP_API_URL

const Carrousel = () => {
    // window.scrollTo(0, 0);

    const baseurl = window.location.search
    const dispatch = useDispatch();
    const [orderInfo, setOrderInfo] = useState({})

    const state = useSelector(state => state.userDetail.order);
    const {isFetching} = useSelector(state => state.userDetail);
    console.log(state);

    const {_id: userId, accessToken} = useSelector(state => state.persistedReducer.user.currentUser);
    const {products: orderItems, total: totalPrice} = useSelector(state => state.persistedReducer.cart);
    const {municipio: city, departamento, address, name, lastName, phoneNumber, neighborhood} = useSelector(state => state.persistedReducer.user.customerInfo);

    useEffect(() => {
        const getPayuData = async () => {
            const { data } = await axios.get(
                `${BASE_URL}payu${baseurl}`
            );
            setOrderInfo(data)
        };
        getPayuData();
    }, []);

    const info = {
        userId,
        fName: name,
        lName: lastName,
        phoneNumber,
        orderItems,
        shippingAddress: {
            city,
            departamento,
            address,
            neighborhood
        },
        paymentMethod: orderInfo?.lapPaymentMethodType, ///VER ESTA INFO DEL HTTP.GET
        paymentResult: orderInfo?.message,///VER ESTA INFO DEL HTTP.GET
        totalPrice,
        isDelivered: false,
    }


    useEffect(() => {
        if(orderInfo?.lapPaymentMethodType && orderInfo?.message){
            addOrder(info, accessToken, dispatch)
            dispatch(clearCart());
            dispatch(userInfo({}));
        }
    }, [orderInfo])

    
    if (isFetching){
        return <LoadingSpinner />
    }


    return (
        <>
        <Container>
            <Greeting><p>Gracias <span>{state?.fName} {state?.lName}</span>, su orden ha sido recibida!</p></Greeting>
            <Invoice>
                <InvoiceShipping>
                    <CommerceInfo>
                        <img src="https://res.cloudinary.com/dezaizbpb/image/upload/v1654140091/test/res-console.cloudinary-removebg-preview_kqibe1.png" alt="logo" />
                        <p>Cra 87b No 19a - 21, Torre 3 Apto 202</p>
                        <p>Bogotá D.C.</p>
                    </CommerceInfo>
                    <hr />
                    <ShippingInfo>
                        <div className="dateInfo">
                            <p>Fecha</p>
                            <p>Junio 1, 2022</p>
                        </div>
                        <div className="invoiceNumber">
                            <p>Factura No.</p>
                            <p>#10009</p>
                        </div>
                        <div className="invoiceAddress">
                            <p>Enviar a:</p>
                            <p> {state?.fName} {state?.lName}  </p>
                            <p>{state?.shippingAddress?.address}</p>
                            <p>{state?.shippingAddress?.city} - {state?.shippingAddress?.departamento}</p>
                        </div>
                    </ShippingInfo>
                </InvoiceShipping>
                <InvoiceDetails>
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio unitario</th>
                            <th>Precio total</th>
                        </tr>

                        {
                            state?.orderItems?.map((order, index) => (
                                
                                <tr key={order._id}>
                                    <td>{index+1}</td>
                                    <td>{order.title}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.price}</td>
                                    <td>{order.quantity*order.price}</td>
                                </tr>

                            ))
                        }
                    </table>
                </InvoiceDetails>
                <InvoicePrice>
                    <div>
                        <p>MÉTODO DE PAGO</p>
                        <p>{state?.paymentMethod}</p>
                    </div>
                    <div>
                        <p>COSTO DE ENVÍO</p>
                        <p>$10000</p>
                    </div>
                    <div>
                        <p>CANTIDAD TOTAL</p>
                        <p className="totalPrice">{state?.totalPrice}</p>
                    </div>
                </InvoicePrice>
            </Invoice>

        </Container>

        <Footer />
        </>
    );
};

const Invoice = styled.div`
    box-shadow: 0 0 15px -10px gray;
    border-radius: 3px;
    overflow: hidden;
`

const InvoicePrice = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px;
    background-color: #ECFDF5;
    color: gray;
    font-size: 15px;

    ${mobile({ flexDirection: 'column', padding: '10px 20px', gap: '7px', fontSize: '13px' })}

    & > div > p:first-child {
        color: #31343aec;
        font-weight: 600;
    }

    .totalPrice {
        color: teal;
        font-weight: 700;
        font-size: 1.3rem;
    }

    & > div {

        ${mobile({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}
    }

`

const InvoiceDetails = styled.div`
    padding: 30px 0;

    ${mobile({ fontSize: '14px', padding: '30px 5px', overflowX: 'auto', width: '95%', margin:'auto' })}
    

    table {
        min-width: 95%;
        margin: auto;
        border-width: 1px;
        color: gray;

        ${mobile({ width: '800px' })}

        tr > td:last-child {
            color: #3b3b3b;
            font-weight: 700;
        }

        th {
            background-color: lightgray;
            color: gray;
            padding: 3px 0;
        }

        td {
            text-align: center;
            padding: 3px 0;
        }
    }

    table, th, td {
        border: 1px solid lightgray;
        border-collapse: collapse;
    }
`

const ShippingInfo = styled.div`
    display: flex;
    justify-content: space-between;
    color: #6b7280;

    ${mobile({ flexDirection: 'column', gap: '10px' })}

    & > div > p:first-child {
        color: #31343aec;
        font-weight: 600;
    }

    & .invoiceAddress {
        text-align: right;

        ${mobile({ textAlign: 'left' })}
    }

    
`

const Container = styled.div`
    margin: 40px 180px;

    ${mobile({margin: '15px 20px'})}

`;

const Greeting = styled.div`
    background-color: #D1FAE5;
    margin: 20px 0;
    padding: 12px;
    border-radius: 7px;

    span {
        color: #059669;
        font-weight: 700;
    }

    ${mobile({ fontSize: '14px' })}
`

const InvoiceShipping = styled.div`
    background-color: #EEF2FF;
    padding: 7px 30px 30px;

    hr {
        border: none;
        border-bottom: 1px solid white;
        margin: 1rem auto;
    }
    
    ${mobile({ fontSize: '14px', padding:'5px 20px 20px' })}
`

const CommerceInfo = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    color: #6b7280;
    
    img {
        width: 100px;
        height: 100px;
        object-fit: cover;

        ${mobile({ width: '70px', height: '70px' })}
    }

    ${mobile({ alignItems: 'flex-start' })}
`

export default Carrousel;
