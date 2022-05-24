import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
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
import PayuFinish from "../pages/PayuFinish";
import Profile from "../pages/Profile";

const AppRouter = () => {

    const {currentUser} = useSelector(state => state.persistedReducer.user);

    return (
        <BrowserRouter>
            <NavContainer className="test">
                <Announcement />
                <Navbar />
            </NavContainer>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/payu" element={<Carrousel />} />
                <Route path="/payufinish" element={<PayuFinish />} />
                <Route path="/profile" element={<Profile />} />
                
                <Route path="/products/:category" element={<ProductList />}/>
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/shipping" element={<ShippingScreen />} />
                <Route path="/order" element={<OrderScreen />} />
                <Route path="/login" element={
                    <PrivateRoute isAuth={currentUser}>
                        <Login />
                    </PrivateRoute>} />
                <Route path="/register" element={
                    <PrivateRoute isAuth={currentUser}>
                        <Register />
                    </PrivateRoute>} />
            </Routes>
            <Newsletter />
            <Footer />
        </BrowserRouter>
    );
};

const NavContainer = styled.div`
    position: sticky;
    top: 0;
    z-index: 999;
`

export default AppRouter;
