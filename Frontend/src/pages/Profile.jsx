import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";
import { FaUserAlt } from "react-icons/fa";
import { mobile } from "../responsive";
import LoadingSpinner from "../components/LoadingError/LoadingSpinner";
import OrderHeader from '../components/Order/OrderHeader'
import OrderBodyInfo from '../components/Order/OrderBody'
import OrderShipping from '../components/Order/OrderShipping'

const BASE_URL = process.env.REACT_APP_API_URL


const Profile = () => {

    const { _id: userId, accessToken } = useSelector(
        (state) => state.persistedReducer.user?.currentUser
    );

    const initialState = {
        order: [],
        isLoading: false,
        isError: false,
    };

    const [orders, setOrders] = useState(initialState);
    const {order, isLoading, isError} = orders

    const [show, setShow] = useState([0])

    const handleClick = (i) => {
        if(show.includes(i)){
            handleHide(i)
        } else {
            setShow([
                ...show,
                i
            ])
        }
    }

    const handleHide = (i) => {
        const test = [...show]
        const filtered = test.filter(x => x !== i)
        setShow(filtered);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        const getOrders = async () => {
            setOrders({ ...orders, isLoading: true })
            const { data } = await axios.get(`${BASE_URL}orders/find/${userId}`,{
                    headers: { token: `Bearer ${accessToken}`},
                }
            );
            setOrders({ ...orders, order: data, isLoading: false });
        };
        getOrders();
    }, []);

    return (
        <Container>
            <LeftContainer>
                <ProfileContainer>
                    <TopContainer></TopContainer>
                    <BottomContainer>
                        <UserInfoContainer>
                            <FaUserAlt />
                            <NameContainer>
                                <p>Admin</p>
                                <p>Joined Janaury 4, 2022</p>
                            </NameContainer>
                        </UserInfoContainer>
                        <OptionList><p>Profile Settings</p></OptionList>
                        <OptionList><p>Order List</p></OptionList>
                    </BottomContainer>
                </ProfileContainer>
            </LeftContainer>
            <RightContainer>
                <p>Pedidos</p>

                {
                    isLoading ? <LoadingSpinner /> :(

                    order?.map((order, index) => (
                        <OrderContainer key={order._id}>
                            <OrderHeader 
                                orderId={order._id}
                                orderDate={order.createdAt}
                                orderPrice={order.totalPrice}
                                orderQuantity={order.orderItems}
                                handleClick={handleClick}
                                index={index}
                            />

                            <OrderBody variant={show.includes(index) ? 'okey' : null}>
                                <OrderBodyHeader>
                                    <p className="bigger">Producto</p>
                                    <p className="hideLabel">Valor</p>
                                    <p className="hideLabel">Cantidad</p>
                                    <p className="hideLabel" style={{textAlign: 'right'}}>Subtotal</p>
                                </OrderBodyHeader>
                            
                                {
                                    order.orderItems?.map(item => (
                                        <OrderBodyInfo 
                                            key={item._id}
                                            productImg={item.img}
                                            productTitle={item.title}
                                            productId={item._id}
                                            productPrice={item.price}
                                            productQuantity={item.quantity}
                                        />
                                    ))
                                }

                                <OrderShipping 
                                    address={order.shippingAddress.address}
                                    city={order.shippingAddress.city}
                                    departamento={order.shippingAddress.departamento}
                                    orderPrice={order.totalPrice}
                                />
                            </OrderBody>
                        </OrderContainer>
                    ))
                    )
                }
            </RightContainer>
        </Container>
    );
};

const OrderBodyHeader = styled.div`
    display: flex;
    border-bottom: 1px solid lightgray;

    .hideLabel{
        ${mobile({display: 'none'})}
    }

    p { flex: 1 }

    & > .bigger { flex: 6 }
`

const OrderContainer = styled.div`
    margin-bottom: 1rem;
    border: 1px solid lightgray;
`

const OrderBody = styled.div`
    padding: ${({variant}) => variant == 'okey' ? '1rem' : '0'};
    max-height: ${({variant}) => variant == 'okey' ? '1000px' : '0'};
    overflow: ${({variant}) => variant == 'okey' ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
`

const OptionList = styled.div`
    padding: 10px 18px;
`

const NameContainer = styled.div`
    padding-top: 10px;
`


const UserInfoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3rem;
    height: 120px;

    ${mobile({height: '50px'})}

    svg {
        color: teal;
        font-size: 4rem;
        transform: translate(50%, -50%);

        ${mobile({fontSize: '2rem', transform: 'translate(50%, 50%)'})}
    }
`

const ProfileContainer = styled.div`
    width: 90%;
    box-shadow: 0 0 15px -5px gray;

    ${mobile({width: '100%'})}
`

const TopContainer = styled.div`
    height: 80px;

    ${mobile({display: 'none'})}
`

const BottomContainer = styled.div`
    
`

const RightContainer = styled.div`
    flex: 2;
    padding: 0 1rem;

    & > p {
        margin: 0.5rem 0 0.5rem;
        font-weight: 700;
        background-color: grey;
        color: white;
        padding: 7px 10px;
    }
`;

const LeftContainer = styled.div`
    flex: 1;
    height: 400px;
    padding: 1rem;

    ${mobile({height: '200px', width: '100%'})}
`;

const Container = styled.div`
    display: flex;
    padding: 40px 80px;

    ${mobile({flexDirection: 'column', padding: '10px'})}
`;

export default Profile;
