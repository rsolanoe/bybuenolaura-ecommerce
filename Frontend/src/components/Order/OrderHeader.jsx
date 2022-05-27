import React from "react";
import styled from "styled-components";
import moment from 'moment'
import { mobile } from "../../responsive";

const Header = ({orderId, orderDate, orderPrice, handleClick, index}) => {
    return (
        <HeaderContainer>
            <HeaderItem>
                <p>Pedido No. {orderId}</p>
                <span>Realizado el {moment(orderDate).format("dddd, D MMMM YYYY")}
                </span>
            </HeaderItem>
            <HeaderItem className="cantidad">
                <p><span>Cantidad: </span>1 producto</p>
            </HeaderItem>
            <HeaderItem className="cantidad">
                <p><span>Total del Pedido: </span> $ {orderPrice}</p>
                <p onClick={() => handleClick(index)} style={{
                        color: "teal",
                        fontWeight: "700",
                        cursor: "pointer",
                    }}
                >
                    Mostrar Pedido
                </p>
            </HeaderItem>
        </HeaderContainer>
    );
};


const HeaderItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 14px;

    span {
        color: gray;
        font-weight: 600;
    }

    p {
        font-weight: 600;
    }

    &.cantidad {
        
        p {
            font-weight: 500;

            span{
                color: gray;
                font-weight: 300;
            }
        }
    }
`

const HeaderContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    background-color: #f0f0f0;
    padding: 10px;
    border-bottom: 1px solid lightgray;

    ${mobile({flexDirection: 'column'})}
`

export default Header;
