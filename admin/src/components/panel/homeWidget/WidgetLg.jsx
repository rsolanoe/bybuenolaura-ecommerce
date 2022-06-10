import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios'
import { useSelector } from "react-redux";
import {options} from '../../../dummyData.js'
import moment from 'moment'
import 'moment/locale/es'

moment.updateLocale('es', options);
//     months: ["Enero", 'febrero', 'marzo', 'abril', 'mayo', 'junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
// });

const WidgetLg = () => {

    const date = new Date()

    const [orders, setOrders] = useState([])

    const {currentUser} = useSelector(state => state.persistedReducer.user);

    useEffect(() => {

        const token = currentUser.accessToken

        const getOrders = async () => {
            const { data } = await axios.get('http://localhost:5000/api/orders', {
                headers: {
                    token: `Bearer ${token}`
                }
            })
            // console.log(data)
            setOrders(data)
        }

        getOrders()

    }, [])

    return (
        <WidgetLgContainer>
            <Title>Últimas transacciones</Title>
            <Table>
                <thead>
                    <TableTr>
                        <TableTh>Cliente</TableTh>
                        <TableTh>Fecha</TableTh>
                        <TableTh>Monto</TableTh>
                        <TableTh>Enviado</TableTh>
                    </TableTr>
                </thead>
                <tbody>
                {
                    orders.slice(0,5).map(order => (
                        <TableTr key={order._id}>
                            <TableTdUser> 
                                <img src="data:image/png;base64,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" />
                                <Username>{order.fName} {order.lName}</Username>
                            </TableTdUser>
                            <TableTdDate>{moment(order.createdAt).format("Do [de] MMMM [del] YYYY")}</TableTdDate> 
                            <TableTdAmount>${order.totalPrice.toLocaleString('usd')}</TableTdAmount>
                            <TableTdStatus><Button type={order.isDelivered ? 'Approved' : 'Pendiente'}>{ order.isDelivered ? 'Approved' : 'Pendiente' }</Button></TableTdStatus>
                        </TableTr>
                    ))
                }
                </tbody>
            </Table>
        </WidgetLgContainer>
    );
};

const TableTdUser = styled.td`
    display: flex;
    align-items: center;
    font-weight: 600;
    gap: 10px;

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    }
`

const Username = styled.span`
    
`

const TableTdDate = styled.td`
    font-weight: 300;
`

const TableTdAmount = styled.td`
    font-weight: 300;
`

const TableTdStatus = styled.td`
    
`

const Button = styled.button`
    padding: 5px 7px;
    border: none;
    border-radius: 10px;
    background-color: ${ ({type}) => type === 'Approved' ? '#e5faf2' : type === 'Declined' ? '#fff0f1' : '#ebf1fe' };
    color: ${ ({type}) => type === 'Approved' ? '#3bb077' : type === 'Declined' ? '#d95087' : '#2a7ade' };
`


//////////////////////////////

const WidgetLgContainer = styled.div`
    flex: 2;
    box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
`;

const Title = styled.h3`
    font-size: 22px;
    font-weight: 600;
`

const Table = styled.table`
    width: 100%;
    border-spacing: 20px;
`

const TableTr = styled.tr`
    
`

const TableTh = styled.th`
    text-align: left;
`

export default WidgetLg;
