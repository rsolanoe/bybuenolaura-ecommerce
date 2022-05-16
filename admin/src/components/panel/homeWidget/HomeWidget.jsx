import React from "react";
import styled from 'styled-components'
import WidgetLg from "./WidgetLg";
import WidgetSm from "./WidgetSm";

const HomeWidget = () => {
    return (
        <HomeWidgetContainer>
            <WidgetSm />
            <WidgetLg />
        </HomeWidgetContainer>
    );
};

const HomeWidgetContainer = styled.div`
    display: flex;
    margin: 20px;
    gap: 20px;
`


export default HomeWidget;
