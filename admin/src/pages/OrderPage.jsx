import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import OrderItem from "../components/Order/OrderItem";
import RoomIcon from "@mui/icons-material/Room";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PersonIcon from "@mui/icons-material/Person";
import { mobile } from "../responsive";
import axios from 'axios'


const OrderPage = () => {
    const { id } = useParams();

    const { accessToken } = useSelector(
        (state) => state.persistedReducer.user.currentUser
    );
    const { orders } = useSelector((state) => state.persistedReducer.orders);

    const currentOrder = orders.find((order) => order._id === id);
    const { orderItems } = currentOrder;
    console.log(currentOrder._id);
    console.log(currentOrder.isDelivered);

    const [delivered, setDelivered] = useState(currentOrder.isDelivered)


    const handleUpdate = async () => {
        
        const response = await axios.put(`http://localhost:5000/api/orders/${currentOrder._id}`, { isDelivered: true }, {
            headers: {
                token: `Bearer ${accessToken}`
            }
        })
        setDelivered(true)
        console.log(response);

    }

    const removeUpdate = async () => {
        
        const response = await axios.put(`http://localhost:5000/api/orders/${currentOrder._id}`, { isDelivered: false }, {
            headers: {
                token: `Bearer ${accessToken}`
            }
        })
        setDelivered(false)
        console.log(response);

    }

    return (
        <OrderContainer>
            <OrderState isDelivered={delivered}>
                <p>Order ID: {currentOrder._id}</p>
                <p>Estado: {delivered ? 'Enviado' : 'Pendiente'}</p>
            </OrderState>
            <TopContainer>
                <OrderItem
                    icon={<PersonIcon />}
                    title="Cliente"
                    infoTop={`${currentOrder.fName} ${currentOrder.lName}`}
                    infoBottom={currentOrder.phoneNumber}
                />
                <OrderItem
                    icon={<LocalShippingIcon />}
                    title="Destino"
                    infoTop={`${currentOrder.shippingAddress.city} - ${currentOrder.shippingAddress.departamento}`}
                    infoBottom={'Colombia'}
                />
                <OrderItem
                    icon={<RoomIcon />}
                    title="Dirección"
                    infoTop={`${currentOrder.shippingAddress.address}`}
                    infoBottom={`Barrio: ${currentOrder.shippingAddress.neighborhood}`}
                />
            </TopContainer>
            <ProductsContainer>
                <ReceiptContainer>
                    {orderItems.map((product) => (
                        <ProductContainer key={product.title}>
                            <ProductInfoContainer>
                                <ProductImgContainer>
                                    <img src={product.img} alt={product.title} />
                                </ProductImgContainer>
                                <p>{product.title}</p>
                            </ProductInfoContainer>
                            <ProductPriceContainer>
                                <QuantityContainer>
                                    <p>Cantidad</p>
                                    <p>{product.quantity}</p>
                                </QuantityContainer>
                                <PriceContainer>
                                    <p>Subtotal</p>
                                    <p>
                                        $
                                        {(
                                            product.quantity * product.price
                                        ).toLocaleString("usd")}
                                    </p>
                                </PriceContainer>
                            </ProductPriceContainer>
                        </ProductContainer>
                    ))}
                    <p style={{ textAlign: 'right' }} >Total: <span style={{ fontWeight: '900' }}>${(currentOrder.totalPrice).toLocaleString('usd')}</span></p>
                </ReceiptContainer>

                <Button onClick={handleUpdate}>
                    MARCAR COMO ENVIADO
                </Button>
                <Button onClick={removeUpdate}>
                    MARCAR COMO NO ENVIADO
                </Button>
            </ProductsContainer>
        </OrderContainer>
    );
};

const ReceiptContainer = styled.div`
    flex: 5;
`

const Button = styled.button`
    align-self: flex-start;
    padding: 0.8rem;
    flex: 1;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    background-color: teal;
    color: white;
    letter-spacing: 1px;
`

const ProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding-bottom: 8px;
    border-bottom: 1px solid lightgray;
`;

const ProductInfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    p {
        font-size: 14px;

        ${mobile({ width: "60%", marginRight: "7px" })}
    }

    ${mobile({ gap: "1rem", justifyContent: "flex-start" })}
`;

const ProductImgContainer = styled.div`
    width: 60px;
    height: 60px;

    ${mobile({ width: "60px", height: "60px" })}

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ProductPriceContainer = styled.div`
    display: flex;
    gap: 2rem;

    ${mobile({ gap: "1rem" })}

    p {
        font-size: 14px;
    }
`;

const QuantityContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

const ProductsContainer = styled.div`
    margin: 0 4rem;
    display: flex;
    justify-content: space-between;
    gap: 5rem;
`;

const OrderContainer = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    padding: 20px 0;

`;

const OrderState = styled.div`
    display: flex;
    gap: 2rem;
    margin: 0.5rem 4rem 0;
    padding: 0.7rem;
    border-radius: 7px;
    background-color: ${({isDelivered}) => isDelivered ? '#c8fae7' : '#fdb1b1'};
`

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: 85%; */
    margin: 1.5rem 4rem;
    padding: 30px 40px;
    background-color: #1d80804b;
    border-radius: 10px;
`;

export default OrderPage;
