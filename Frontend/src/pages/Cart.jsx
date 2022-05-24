import React from "react";
import styled from "styled-components";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCart, increaseCart, removeProduct } from "../redux/cartSlice";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const cart = useSelector((state) => state.persistedReducer.cart);


    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleClick = () => {
        navigate('/shipping')
    }

    const handleRemoveFromCart = (product) => {
        dispatch(removeProduct(product))
    }

    const handleDecreaseQuantity = (product) => {
        dispatch(decreaseCart(product))
    }

    const handleIncreaseQuantity = (product) => {
        dispatch(increaseCart(product))
    }

    return (
        <Container>
            <Wrapper>
                <Title>YUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag({cart.quantity})</TopText>
                        <TopText>Your Whislist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>

                {cart.products.length === 0 
                    ? (<h1>Cart empty...</h1>) 
                    : (
                    <Bottom>
                        <Info>
                            {cart.products.map((product) => (
                                <Product key={product._id}>
                                    <ProductDetail>
                                        <img src={product.img} />
                                        <Details>
                                            <ProductDetails>
                                                <ProductName>
                                                    <b>Product: </b>
                                                    {product.title}
                                                </ProductName>
                                                <ProductID>
                                                    <b>ID: </b>
                                                    {product._id}
                                                </ProductID>
                                                <ProcutSize>
                                                    <b>Size:</b> {product.size}
                                                </ProcutSize>
                                            </ProductDetails>
                                            <button onClick={()=> handleRemoveFromCart(product)} >Remove</button>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <ProductAmountContainer>
                                            <IoRemoveSharp onClick={()=> handleDecreaseQuantity(product)} />
                                            <ProductAmount>
                                                {product.quantity}
                                            </ProductAmount>
                                            <IoAddSharp onClick={()=> handleIncreaseQuantity(product)} />
                                        </ProductAmountContainer>
                                        <ProductPrice>
                                            $ {product.price * product.quantity}
                                        </ProductPrice>
                                    </PriceDetail>
                                </Product>
                            ))}
                        </Info>
                        <Summary>
                            <SummaryInfo>
                                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                                <SummaryItem>
                                    <SummaryItemText>Subtotal</SummaryItemText>
                                    <SummaryItemPrice>
                                        $ {cart.total}
                                    </SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem>
                                    <SummaryItemText>
                                        Estimated Shipping
                                    </SummaryItemText>
                                    <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem>
                                    <SummaryItemText>
                                        Shipping Discount
                                    </SummaryItemText>
                                    <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                                </SummaryItem>
                                <SummaryItem type="total">
                                    <SummaryItemText>Total</SummaryItemText>
                                    <SummaryItemText>
                                        $ {cart.total}
                                    </SummaryItemText>
                                </SummaryItem>
                                <SummaryButton onClick={handleClick} >CHECKOUT NOW</SummaryButton>
                            </SummaryInfo>
                        </Summary>
                    </Bottom>
                )}
            </Wrapper>
        </Container>
    );
};

const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
`

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;

    ${mobile({ padding: "20px" })}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${({ type }) => type === "filled" && "none"};
    background-color: ${({ type }) =>
        type === "filled" ? "black" : "transparent"};
    color: ${({ type }) => type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({ flexDirection: 'column', gap: '30px' })}
`;

const Info = styled.div`
    flex: 3;

    hr {
        border: none;
        background-color: #eee;
        height: 1px;
    }
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;

    ${mobile({ flexDirection: 'column' })}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;

    ${mobile({ flexDirection: 'column' })}

    img {
        min-width: 200px;
        height: 168px;
        object-fit: cover;

        ${mobile({ objectFit: 'contain' })}
    }
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 300;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
        height: 20px;
        color: grey;
        border: none;
        width: 80px;
        cursor: pointer;
        border-radius: 7px;
        justify-content: flex-end;
        background-color: lightgrey;

        ${mobile({ marginTop: '10px' })}
    }
`;

const ProductName = styled.span``;

const ProductID = styled.span``;

const ProcutSize = styled.span`
    /* margin-top: 3rem; */
`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryInfo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${mobile({ gap: '7px' })}
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: ${({ type }) => type === "total" && "500"};
    font-size: ${({ type }) => type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

export default Cart;
