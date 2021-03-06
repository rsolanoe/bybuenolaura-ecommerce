import Products from "../components/Products";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { mobile } from "../responsive";
import Footer from "../components/Footer";

const ProductList = () => {

    window.scrollTo(0, 0)

    const { category } = useParams();

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFIlter = ({ target }) => {
        const value = target.value;
        setFilters({
            ...filters,
            [target.name]: value,
        });
    };

    return (
        <>
            <Container>
                <Title>{category}</Title>
                {/* <FilterContainer>
                    <Filter>
                        <FilterText>Filter Products:</FilterText>
                        <Select name="categories" onChange={handleFIlter} defaultValue='Categoria'>
                            <Option value='Categoria' disabled >Categoria</Option>
                            <Option>Mascarilla</Option>
                            <Option>black</Option>
                            <Option>red</Option>
                            <Option>blue</Option>
                            <Option>yellow</Option>
                            <Option>green</Option>
                        </Select>
                        <Select name="size" onChange={handleFIlter} defaultValue='Size'>
                            <Option value='Size' disabled>Size</Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>Sort Products:</FilterText>
                        <Select onChange={(e) => setSort(e.target.value)}>
                            <Option value="newest">Newest</Option>
                            <Option value="asc">Price (asc)</Option>
                            <Option value="desc">Price (desc)</Option>
                        </Select>
                    </Filter>
                </FilterContainer> */}
                <Products cat={category} filters={filters} sort={sort} />
            </Container>
            <Footer />
        </>
    );
};

const Container = styled.div`
`;

const Title = styled.h1`
    margin: 20px 0;
    padding: 0 80px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 80px;
`;

const Filter = styled.div`
    margin: 20px 0;

    ${mobile({ margin: "0 20px", display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
    font-style: 20px;
    font-weight: 600;
`;

const Select = styled.select`
    padding: 10px;
    margin-left: 10px;
`;

const Option = styled.option``;

export default ProductList;
