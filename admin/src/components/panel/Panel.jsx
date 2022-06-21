import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Chart from "./chart/Chart";
import FeaturedInfo from "./featuredIngo/FeaturedInfo";
import { options } from '../../dummyData'
import { userData } from '../../dummyData'
import HomeWidget from "./homeWidget/HomeWidget";
import { useSelector } from "react-redux";
import axios from "axios";


const Panel = () => {

    const {currentUser} = useSelector(state => state.persistedReducer.user);

    const [sales, setData] = useState([])
    const totalSale = sales.reduce((acc, item) => acc + item.Monto, 0)

    useEffect(() => {

        const token = currentUser.accessToken

        const getData = async () => {
            const {data} = await axios.get('http://localhost:5000/api/orders/stats', {
                headers: {
                    token: `Bearer ${token}`,
                }
            })
            data.map(item => 
                setData(prev => [
                    ...prev,
                    {mes: options.months[item._id - 1], "Monto": item.total}
                ]))
        }

        getData()

    }, [])
    

    return (
        <Container>
            <FeaturedInfo />
            {
                sales.length > 0 && <div style={{margin: '20px'}}><Chart data={sales} title='Análisis de ventas' grid dataKey={"Monto"}/></div>
            }
            <HomeWidget />
        </Container>
    );
};

const Container = styled.section`
    flex: 4;
    padding: 20px;
`;

export default Panel;
