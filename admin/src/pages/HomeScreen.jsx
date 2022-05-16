import React from "react";
import SideBar from "../components/sidebar/SideBar";
import styled from 'styled-components'
import Panel from "../components/panel/Panel";
import { Routes, Route } from 'react-router-dom'
import UserList from "./UserList";

const HomeScreen = () => {
    return (
        <Main>
            <SideBar />
            <Routes>
                <Route path='/' element={<Panel />} />
                <Route path='user' element={<UserList />} />
            </Routes>
        </Main>
    );
};

const Main = styled.main`
    display: flex;
`



export default HomeScreen;
