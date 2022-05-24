import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { RiArrowDownSLine, RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";

const Navbar = () => {
    const { quantity } = useSelector((state) => state.persistedReducer.cart);

    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.persistedReducer.user);

    const [hide, setHide] = useState(true)

    return (
        <Container>
            <Wrapper>
                <Left>
                    <ImgContainer>
                        <img src="https://res.cloudinary.com/dezaizbpb/image/upload/v1652450221/test/WhatsApp_Image_2022-05-12_at_10.00.12_PM_qng18y.jpg" />
                    </ImgContainer>
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
                    {
                        currentUser
                        ? (
                            <>
                                <OptionsContainer onMouseLeave={()=>setHide(true)}>
                                    <UsernameContainer onMouseEnter={()=>setHide(false)} >
                                        <p>Hola, pello</p>
                                        <ArrowContainer><RiArrowDownSLine/></ArrowContainer>
                                    </UsernameContainer>
                                    <UserDropDownMenu show={hide} >
                                        <Link to='profile'><ProfileOption onClick={()=>setHide(true)} >Perfil</ProfileOption></Link>
                                        <ProfileOption onClick={()=>{dispatch(logout()); setHide(true)}} >Cerrar sesión</ProfileOption>
                                    </UserDropDownMenu>
                                </OptionsContainer>
                                {/* <MenuItem onClick={()=>dispatch(logout())} >LOGOUT</MenuItem> */}
                            </>
                        )
                        : (<>
                            <Link to="/register">
                                <MenuItem>REGISTER</MenuItem>
                            </Link>
                            <Link to="/login">
                                <MenuItem>SING IN</MenuItem>
                            </Link>
                        </>
                        )
                    }

                    {/* <Link to="/register">-------------------------
                        <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to="/login">
                        <MenuItem>SING IN</MenuItem>
                    </Link> */}
                    {/* <MenuItem onClick={()=>dispatch(logout())} >Logout</MenuItem>---------------------- */}
                    <Link to="/cart">
                        <MenuItem>
                            <RiShoppingCartLine />
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

const OptionsContainer = styled.div`
    position: relative;

`

const ArrowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const UsernameContainer = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
`

const ProfileOption = styled.div`
    background-color: #ffffff;
    padding: 5px ;
    color: black;
    cursor: pointer;
    transition: all 0.1s ease;
    border: 1px solid lightgray;

    &:hover {
        background-color: teal;
        color: white;
    }

`

const UserDropDownMenu = styled.div`
    display: ${({show}) => show == true ? 'none' : 'block'};
    border-radius: 3px;
    overflow: hidden;
    position: absolute;
    width: 105px;

    /* a {
        color: black !important;
    } */
`

const Container = styled.header`
    height: 60px;
    box-shadow: 0px 0px 7px lightgray;
    background-color: white;
    padding: 0 80px;
    
    ${mobile({ height: "50px", padding:'0' })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mobile({ padding: "10px 0", marginLeft: "18px", position: 'sticky', top:'0' })}
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    flex: 1;

    ${mobile({ display: "none" })}

`;

const ImgContainer = styled.div`
    width: 50px;
    height: 50px;
    background-color: red;
    z-index: 5;

    img {
        width: 100%;
    }
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
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
    gap: 2rem;

    a {
        text-decoration: none;
        color: inherit;
    }

    ${mobile({ justifyContent: "flex-end", gap: "10px", flex: "2", marginRight: '17px' })}

    .cart__container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(30%, -20%);
        height: 17px;
        width: 17px;
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
        font-size: 25px;
    }

    span {
        font-size: 12px;
        font-weight: bold;
        //border-radius: 50%;
        text-align: center;
    }
`;

export default Navbar;
