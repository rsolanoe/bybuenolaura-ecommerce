import React, { useContext } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";

const Navbar = () => {

    const {quantity} = useSelector(state => state.cart)

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <FaSearch />
                    </SearchContainer>
                </Left>

                <Center>
                    <Logo>
                        <Link to={"/"}>byBuenoLaura</Link>
                    </Logo>
                </Center>

                <Right>
                    <Link to="/register">
                        <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to="/login">
                        <MenuItem>SING IN</MenuItem>
                    </Link>
                    <Link to="/cart">
                        <MenuItem>
                            <BsCart />
                                   {quantity > 0 ? (
                        <div className="cart__container">
                           <span>{quantity}</span>
                        </div>
                     ) : null}
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
};

const Container = styled.header`
    height: 60px;
    box-shadow: 0px 0px 7px lightgray;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    flex: 1;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;

    svg {
        font-size: 12px;
        color: grey;
    }
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}

    :focus {
        outline: none;
    }
`;

const Center = styled.div`
    flex: 1;
    text-align: center;

    a {
        text-decoration: none;
        color: black;
    }
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "20px" })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 25px;

    a {
        text-decoration: none;
        color: black;
    }

    ${mobile({ justifyConent: "center", gap: "10px", flex: "2" })}

    .cart__container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(30%, -20%);
        height: 22px;
        width: 22px;
        background-color: blue;
        color: white;
        border-radius: 50%;
    }
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    position: relative;
    ${mobile({ fontSize: "12px" })}

    svg {
        font-size: 35px;
    }

    span {
        font-size: 15px;
        font-weight: bold;
        //border-radius: 50%;
        text-align: center;
    }
`;

export default Navbar;
