import React from "react";
import TopBar from "./components/topbar/TopBar";
import HomeScreen from "./pages/HomeScreen";
import {BrowserRouter } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <TopBar />
            <HomeScreen />
        </BrowserRouter>
    );
};

export default App;
