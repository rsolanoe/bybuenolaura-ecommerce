import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const {data} = await axios.get('http://localhost:5000/api/products?category=small');
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, [cat]);

    return (
        <Container>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    );
};

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export default Products;
