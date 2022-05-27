import React from "react";
import styled from "styled-components";
import { mobile } from '../responsive';

const OrderItem = ({icon, title, infoTop, infoBottom }) => {
    return (
        <CustomerInfoContainer>
            <SvgContainer>
                {icon}
            </SvgContainer>
            <div className="info">
                <p className="customerTitle">{title}</p>
                <p className="customerName">{infoTop}</p>
                <p className="customerEmail">{infoBottom}</p>
            </div>
        </CustomerInfoContainer>
    );
};

const CustomerInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;


    ${mobile({width: '95%', justifyContent: 'flex-start'})}

    & > .info {
        display: flex;
        flex-direction: column;
        gap: 7px;
        ${mobile({gap: '3px'})}

        & > .customerTitle{
            color: #005252;
            font-weight: 700;
            font-size: 1.4rem;

            ${mobile({fontSize: '1.1rem'})}
        }

        & > .customerName, .customerEmail {
            color: #002e2e;
            font-weight: 600;

            ${mobile({fontSize: '1.0rem', fontWeight: '400'})}
        }
       
    }
`

const SvgContainer = styled.div`
    
    height: 70px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #3092925c;
    margin-right: 2rem;

    ${mobile({height: '50px', width: '50px'})}

    svg {
        font-size: 1.5rem;
        color: #005252;

        ${mobile({fontSize: '1.1rem'})}
    }
`

export default OrderItem;
