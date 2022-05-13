import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import getProduct from "../helpers/getProduct";

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await getProduct(cat);
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, [cat]);

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
`;

export default Products;
