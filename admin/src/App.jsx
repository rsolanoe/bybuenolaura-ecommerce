import React from "react";
import { useSelector } from "react-redux";
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import TopBar from "./components/topbar/TopBar";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";

const App = () => {

    const {currentUser} = useSelector(state => state.persistedReducer.user);
  
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={ currentUser ? <>
                                            <TopBar />
                                            <HomeScreen />
                                       </> : <Navigate to='/login' />} />
               <Route path='login' element={ currentUser ? <Navigate to='/' /> : <LoginScreen/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
