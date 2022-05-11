import styled from "styled-components";
import { BsCartPlus, BsSearch, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Product = ({ item }) => {
    const context = useContext(AppContext);

    const { addCart, setAddCart } = context;

    const handleClick = () => {
        setAddCart([...addCart, item]);
    };

    return (
        <Container>
            <Circle />
            <img src={item.img} />
            <Info>
                <Icon>
                    <BsCartPlus onClick={handleClick} />
                </Icon>
                <Link to={`/product/${item._id}`}>
                    <Icon>
                        <BsSearch />
                    </Icon>
                </Link>
                <Icon>
                    <BsHeart />
                </Icon>
            </Info>
        </Container>
    );
};

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transition: all 0.3s ease;

    &:hover {
        opacity: 1;
    }

    svg {
        font-size: 1.5rem;
        color: black;
    }
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover {
        background-color: #b2fcfc;
        transform: scale(1.2);
    }
`;

const Container = styled.div`
    position: relative;
    display: flex;
    //flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 7px;
    min-width: 280px;
    height: 350px;
    cursor: pointer;
    background-color: #f5fbfd;

    img {
        height: 75%;
        z-index: 2;
    }
`;

export default Product;
