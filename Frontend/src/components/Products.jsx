import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/apiCalls";
import LoadingSpinner from "./LoadingError/LoadingSpinner";
import { mobile, tablet } from "../responsive";

const Products = ({ cat, filters, sort }) => {
    // console.log(cat);
    // console.log(filters);

    const dispatch = useDispatch();
    const { products, isFetching, error } = useSelector(
        (state) => state.product
    );
    // console.log(products);

    const categorias = products.reduce((acc, item) => {
        if (!acc.includes(item.categories)) {
            acc.push(item.categories);
        }
        return acc;
    }, []);

    // console.log(categorias);

    const [filteredProducts, setfilteredProducts] = useState([]);

    // console.log(filteredProducts);

    useEffect(() => {
        getProducts(dispatch, cat);
    }, [dispatch, cat]);

    useEffect(() => {
        (cat || filters) &&
            setfilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(
                        ([key, value]) => item[key] == value
                    )
                )
            );
    }, [cat, filters, products]);

    if (isFetching) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <h1>Error...</h1>;
    }

    return (
        <Container>
            {cat || filters
                ? filteredProducts.map((item) => (
                      <Product item={item} key={item._id} />
                  ))
                : products?.map((item) => (
                      <Product item={item} key={item._id} />
                  ))}
        </Container>
    );
};

const Container = styled.div`
    padding: 20px 80px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    ${mobile({
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        padding: "20px",
    })}
`;

export default Products;
