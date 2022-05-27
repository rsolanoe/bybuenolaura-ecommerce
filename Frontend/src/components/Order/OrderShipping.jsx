import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

const OrderShipping = ({address, city, departamento, orderPrice}) => {
    return (
        <ShippingContainer>
            <ShippingAddress>
                <p className="shippingAddres">Dirección de envío:</p>
                <p>Solano E Rodolfo</p>
                <p>{address}</p>
                <p>{city} - {departamento}</p>
            </ShippingAddress>
            <ShippingPrice>
                <div className="priceLabel">
                    <p>Subtotal:</p>
                    <p>Entrega:</p>
                    <p>Total: </p>
                </div>
                <div>
                    <p>
                        {orderPrice.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                    </p>
                    <p>Gratis</p>
                    <p className="total">
                        {orderPrice.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                    </p>
                </div>
            </ShippingPrice>
        </ShippingContainer>
    );
};

const ShippingAddress = styled.div`
    
`

const ShippingPrice = styled.div`
    text-align: right;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    ${mobile({width: '100%' })}
`

const ShippingContainer = styled.div`
    padding: 8px 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    ${mobile({flexDirection: 'column', fontSize: '12px', alignItems: 'flex-start', gap: '0.5rem' })}

    .total { font-weight: 700; }

    .priceLabel { color: gray }

    .shippingAddres{ font-weight: 600; }
`

export default OrderShipping;
