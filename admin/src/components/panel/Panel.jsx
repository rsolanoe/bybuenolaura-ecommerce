import React from "react";
import styled from "styled-components";
import Chart from "./chart/Chart";
import FeaturedInfo from "./featuredIngo/FeaturedInfo";
import { userData } from '../../dummyData'
import HomeWidget from "./homeWidget/HomeWidget";

const Panel = () => {
    return (
        <Container>
            <FeaturedInfo />
            <Chart data={userData} title='User Analytics' grid dataKey='Active User'/>
            <HomeWidget />
        </Container>
    );
};

const Container = styled.section`
    flex: 4;
`;

export default Panel;
