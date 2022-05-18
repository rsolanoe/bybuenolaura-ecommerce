import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/apiCalls";
import LoadingSpinner from "./LoadingError/LoadingSpinner";
import { mobile } from "../responsive";

const Products = ({ cat, filters, sort }) => {

    const dispatch = useDispatch();
    const {products, isFetching, error} = useSelector(state => state.product);

    const [filteredProducts, setfilteredProducts] = useState([]);

    useEffect(() => {
        getProducts(dispatch, cat)
    }, [dispatch, cat]);

    useEffect(() => {
        cat &&
            setfilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [cat, filters, products]);

    if (isFetching) {
        return <LoadingSpinner />
    }

    if (error) {
        return <h1>Error...</h1>
    }

    return (
        <Container>
            {
                cat
                    ? filteredProducts.map((item) => (
                        <Product item={item} key={item._id} />
                    ))
                    : 
                    products?.map((item) => (
                        <Product item={item} key={item._id} />
                    ))
            }
        </Container>
    );
};

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ${mobile({ flexWrap: "nowrap", flexDirection: 'column' })}
`;

export default Products;
