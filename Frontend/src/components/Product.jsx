import styled from "styled-components";
import { BsCartPlus, BsSearch, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Product = ({ item }) => {

    return (
        
        
        <Container>

            <figure>
                <img src={item.img} />
            </figure>
            <ProductInfo>
                <p>{item.title}</p>
                <span>$ {item.price}</span>
            </ProductInfo>
            <LinkContainer>
                <Link to={`/product/${item._id}`}>Ir al Producto</Link>
            </LinkContainer>
            {/*   <Info>
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
            </Info> */}

        </Container>
    
    );
};

const ProductInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    p{
        font-weight: 550;
        padding-left: 7px;
    }

    span {
        padding-left: 7px;
    }
`

const LinkContainer = styled.div`
    width: 100%;
    text-align: center;
    padding: 20px;
    border-top: 1px solid lightgray;
    cursor: pointer;
    transition: all 0.2s ease;
    
    
    &:hover{
        background-color: #ffc0cb99;
    }

    a {
        text-decoration: none;
        color: black;
        font-weight: 500;
        
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 7px;
    min-width: 310px;
    box-shadow: 0 0 2px grey;
    
    figure {
        width: 100%;
    }

    img {
        width: 100%;
        height: 350px;
        z-index: 2;
        object-fit: cover;
    }
`;

export default Product;
