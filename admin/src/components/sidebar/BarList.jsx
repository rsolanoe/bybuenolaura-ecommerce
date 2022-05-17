import styled from "styled-components";
import React from "react";

const BarList = ({ title, icon }) => {
    return (
        <ListItem>
            {icon}
            <span>{title}</span>
        </ListItem>
    );
};

const ListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    border-radius: 10px;
    align-items: center;
    transition: all 0.2s ease;
    gap: 7px;

   /*  &:hover {
        background-color: #97C4B8;
        font-weight: 600;
    } */

    svg {
        font-size: 18px;
    }
`;

export default BarList;
