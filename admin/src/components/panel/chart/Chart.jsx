import React from "react";
import styled from "styled-components";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const CustomTooltip = ({ active, payload, label }) => {

    if (active && payload && payload.length) {
    return (
        <div style={{padding: '7px', backgroundColor:'#D3E4CD', opacity:'0.8'}}>
            <p style={{fontWeight: '700'}}>{label}</p>
            <p><span style={{color: '#5550bd'}}>Monto:</span> ${payload[0].value.toLocaleString('usd')}</p>
        </div>
    )
    }

    return <h1>Hola mundo</h1>
}


const Chart = ({title, data, dataKey, grid}) => {

    return (
        <ChartContainer>
            <ChartTitle>{title}</ChartTitle>
            <ResponsiveContainer width='100%' aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="mes" stroke='#5550bd'/>
                    <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
                    <Tooltip content={<CustomTooltip month={data[0].mes} monthlySales={'Monto'} />} />
                    {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/>}
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    );

};

const ChartContainer = styled.div`
    /* margin: 20px; */
    padding: 20px;
    box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
`

const ChartTitle = styled.h3`
    margin-bottom: 20;
`

export default Chart;
