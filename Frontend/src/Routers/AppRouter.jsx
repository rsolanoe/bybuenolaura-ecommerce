import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Announcement from "../components/Announcement";
import Navbar from "../components/NavBar/Navbar";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import ProductList from "../pages/ProductList";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

import styled from 'styled-components'
import ShippingScreen from "../pages/ShippingScreen";
import OrderScreen from "../pages/OrderScreen";
import Carrousel from "../pages/Carrousel";
import Profile from "../pages/Profile";
import Productos from "../pages/Productos";


const AppRouter = () => {

    const {currentUser} = useSelector(state => state.persistedReducer.user);

    return (
        <BrowserRouter>
            <NavContainer>
                <Announcement />
                <Navbar />
            </NavContainer>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/payu" element={<Carrousel />} />
                <Route path="/profile" element={currentUser ? <Profile /> : <Navigate to={'/'} />} />
                <Route path="/products/:category" element={<ProductList />}/>
                <Route path="/productos" element={<Productos />}/>
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/shipping" element={currentUser ? <ShippingScreen /> : <Navigate to='/cart' />} />
                <Route path="/order" element={currentUser ? <OrderScreen /> : <Navigate to='/cart' />} />
                <Route path="/login" element={
                    <PrivateRoute isAuth={currentUser}>
                        <Login />
                    </PrivateRoute>} />
                <Route path="/register" element={
                    <PrivateRoute isAuth={currentUser}>
                        <Register />
                    </PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    );
};

const NavContainer = styled.div`
    position: sticky;
    top: 0;
    z-index: 999;
`

export default AppRouter;
