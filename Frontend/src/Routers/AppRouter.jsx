import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import ProductList from "../pages/ProductList";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {

    const {currentUser} = useSelector(state => state.persistedReducer.user);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:category" element={<ProductList />}/>
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
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

export default AppRouter;
