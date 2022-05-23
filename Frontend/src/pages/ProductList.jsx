import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { mobile } from "../responsive";

const ProductList = () => {

    window.scrollTo(0, 0)

    //* Tiene el mismo resultado que useParams()
    /*  const {pathname} = useLocation();
    console.log(pathname.split('/')[2]); */

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
        <Container>
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFIlter}>
                        <Option disabled>Color</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>
                    <Select name="size" onChange={handleFIlter}>
                        <Option disabled>Size</Option>
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
            </FilterContainer>
            <Products cat={category} filters={filters} merchantid={508029} />
        </Container>
    );
};

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;

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
