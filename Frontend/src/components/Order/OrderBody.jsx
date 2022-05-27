import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

const OrderBodyInfo = ({productImg, productTitle, productId, productPrice, productQuantity, }) => {
    return (
        <BodyContainer>
            <ProductContainer>
                <figure>
                    <img src={productImg} />
                </figure>
                <ProductInfo>
                    <p style={{ fontWeight: "600" }}>{productTitle}</p>
                    <p><span style={{ color: "gray" }}>SKU:</span> {productId}</p>
                </ProductInfo>
            </ProductContainer>
            <p><span className="productDetails">Valor: </span>{productPrice.toLocaleString("en-US", { style: "currency", currency: "USD"})}</p>
            <p><span className="productDetails">Cantidad: </span> {productQuantity} </p>
            <p className="textRight"><span className="productDetails">Subtotal: </span>{(productPrice * productQuantity).toLocaleString("en-US", { style: "currency", currency: "USD",})}</p>
        </BodyContainer>
    );
};

const ProductInfo = styled.div``

const ProductContainer = styled.div`
    flex: 6;
    display: flex;
    align-items: center;
    gap: 9px;

    ${mobile({marginBottom: '0.6rem'})}

    figure {
        height: 85px;
        width: 85px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

const BodyContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgrey;
    padding: 8px 0;

    ${mobile({flexDirection: 'column', fontSize: '12px', alignItems: 'flex-start' })}

    .productDetails {
        display: none;

        ${mobile({display: 'inline', fontWeight:'600' })}
    }

    & > p {
        flex: 1;
        text-align: center;
    }

    .textRight {
        text-align: right;
        display: flex;
        justify-content: space-between;
        gap: 2rem;

        ${mobile({width: '100%' })}
    }
`

export default OrderBodyInfo;
