import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Product = ({ item }) => {

    return (
        <Container>
            <Link to={`/product/${item._id}`} >
                <ProductContainer>
                    <figure>
                        <img src={item.img} />
                    </figure>
                    <ProductInfo>
                        <p>{item.title}</p>
                        <span>$ {item.price}</span>
                    </ProductInfo>
                    <LinkContainer>
                        <span>Ir al Producto</span>
                    </LinkContainer>
                </ProductContainer>
            </Link>
        </Container>
    );
};

const Container = styled.div`
    /* min-width: 130px;
    flex: 1 1 150px;
    ${mobile({ minWidth: "100px" })} */



    & > a {
        text-decoration: none;
        color: inherit;
    }
`

const ProductInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    ${mobile({ fontSize: "11px", gap: '5px' })}
    
    p{
        font-weight: 550;
        padding-left: 7px;
    }

    span {
        padding-left: 7px;
        ${mobile({ fontSize: "11px" })}
    }
`

const LinkContainer = styled.div`
    width: 100%;
    text-align: center;
    padding: 20px;
    border-top: 1px solid lightgray;
    cursor: pointer;
    transition: all 0.2s ease;

    ${mobile({ fontSize: "11px", padding: '7px' })}
    
    
    &:hover{
        background-color: #ffc0cb99;
    }

    a {
        text-decoration: none;
        color: black;
        font-weight: 500;
        
    }
`

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 7px;
    /* width: 310px; */
    box-shadow: 0 0 2px grey;

    /* ${mobile({ width: "140px" })} */
    
    
    figure {
        width: 100%;
    }

    img {
        width: 100%;
        height: 350px;
        z-index: 2;
        object-fit: cover;
        ${mobile({ height: "150px" })}
    }

    
`;

export default Product;
