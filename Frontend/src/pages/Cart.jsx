import React from "react";
import styled from "styled-components";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
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
                <Title>CARRITO</Title>
                <Top>
                    <TopButton>SEGUIR COMPRANDO</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag({cart.quantity})</TopText>
                        <TopText>Your Whislist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">PROCEDER AL PAGO</TopButton>
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
                                                    <p><b>Product: </b>{product.title}</p>
                                                </ProductName>
                                                <ProductID>
                                                    <p><b>ID: </b>{product._id}</p>
                                                </ProductID>
                                                <ProcutSize>
                                                    <b>Size:</b> {product.size}
                                                </ProcutSize>
                                            </ProductDetails>
                                            <FaRegTrashAlt onClick={()=> handleRemoveFromCart(product)} />
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
                                <SummaryTitle>RESUMEN DEL PEDIDO</SummaryTitle>
                                <SummaryItem>
                                    <SummaryItemText>
                                        Subtotal
                                    </SummaryItemText>
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
                                    <SummaryItemText className="totalPrice" >Total</SummaryItemText>
                                    <SummaryItemPrice className="totalPrice">
                                        $ {cart.total}
                                    </SummaryItemPrice>
                                </SummaryItem>
                                <SummaryButton onClick={handleClick} >PROCEDER AL PAGO</SummaryButton>
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

    ${mobile({ fontSize: "14px" })}
`

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 40px 20px;

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
    padding: 20px 45px;

    ${mobile({ padding: "15px 5px" })}
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
    padding: 0 45px;
    gap: 3rem;

    ${mobile({ flexDirection: 'column', padding:'0', gap: '0' })}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    
    box-shadow: 0 0 15px -10px gray;
    /* border-bottom: 1px solid lightgray; */

    ${mobile({ flexDirection: 'column', gap: '5px', marginBottom: '0.5rem',paddingBottom: '0.5rem' })}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    padding: 20px;

    ${mobile({ width: '100%' })}

    img {
        width: 140px;
        height: 118px;
        object-fit: cover;
        border-radius: 5px;

        ${mobile({ objectFit: 'contain', width: '100px', height: '100px' })}
    }
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    gap: 12px;
    border-radius: 3px;
    padding: 0 10px;
    font-size: 13px;
    /* margin-bottom: 20px; */

    ${mobile({ gap: '1px', padding: '0px 5px' })}

    svg {
        cursor: pointer;
    }
`;

const ProductAmount = styled.div`
    /* font-size: 18px; */
    margin: 5px;
    ${mobile({ padding: '0 8px', fontSize: '12px', margin: '0px', borderLeft: '1px solid lightgray', borderRight: '1px solid lightgray' })}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 300;

    ${mobile({ fontSize: '18px', fontWeight: '600' })}
`;

const Details = styled.div`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${mobile({ padding: "10px 0", width:'100%' })}

    svg {
        /* height: 20px; */
        color: #dd0000;
        cursor: pointer;
        justify-content: flex-end;
        font-size: 1.3rem;

        ${mobile({ fontSize: '1.2rem' })}
    }
`;

const ProductName = styled.p``;

const ProductID = styled.p``;

const ProcutSize = styled.p`
    /* margin-top: 3rem; */
`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${mobile({ flexDirection: 'row', gap:'2rem' })}
`;

const Summary = styled.div`
    flex: 1;
    /* border: 0.5px solid lightgray; */
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
    background-color: white;
    box-shadow: 0 0 15px -10px grey;

    ${mobile({ margin: '20px 25px' })}
`;

const SummaryInfo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${mobile({ gap: '7px' })}
`;

const SummaryTitle = styled.p`
    font-weight: 500;
    font-size: 1.4rem;
`;

const SummaryItemText = styled.p`
    color: gray;
    font-weight: 300;

    &.totalPrice{

        ${mobile({ fontSize: '1rem' })}
    }

    ${mobile({ fontSize: '0.7rem' })}
  
`;

const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: ${({ type }) => type === "total" && "700"};
    font-size: ${({ type }) => type === "total" && "2rem"};

`;



const SummaryItemPrice = styled.p`
    
    &.totalPrice{
        
        ${mobile({ fontSize: '1rem' })}
    }

    ${mobile({ fontSize: '0.7rem' })}


`;

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

export default Cart;
