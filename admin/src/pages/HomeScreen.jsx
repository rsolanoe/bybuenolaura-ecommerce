import React from "react";
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import SideBar from "../components/sidebar/SideBar";
import Panel from "../components/panel/Panel";
import UserList from "./UserList";
import UserPage from "./UserPage";
import NewUser from "./NewUser";
import ProductList from "./ProductList";
import ProductPage from "./ProductPage";

const HomeScreen = () => {
    return (
        <Main>
            <SideBar />
            <Routes>
                <Route path='/' element={<Panel />} />
                <Route path='user' element={<UserList />} />
                <Route path='user/:id' element={<UserPage />} />
                <Route path='newUser' element={<NewUser />} />
                <Route path='product' element={<ProductList />} />
                <Route path='product/:id' element={<ProductPage />} />
                <Route path='newProduct' element={<ProductList />} />
            </Routes>
        </Main>
    );
};

const Main = styled.main`
    display: flex;
`



export default HomeScreen;
