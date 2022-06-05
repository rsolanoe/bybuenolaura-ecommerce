import React from 'react'
import styled from 'styled-components'
import Products from "../components/Products";
import { useState } from "react";
import { mobile } from "../responsive";
import Footer from "../components/Footer";



const Productos = () => {

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    console.log(filters);

    const handleFIlter = ({ target }) => {
        const value = target.value;
        console.log(value == '');   

        if(value == ''){
            return setFilters(prevData => {
                const newData = {...prevData}
                delete newData[target.name]
                return newData
            }

            )
        }

        setFilters({
            ...filters,
            [target.name]: value,
        });

    };



    return (
        <>
        <Container>
            <Title>Productos</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="categories" onChange={handleFIlter} defaultValue=''>
                        <Option value=''  >Categoria</Option>
                        <Option>Mascarilla</Option>
                        <Option>serum</Option>
                        <Option>Jabón</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>
                    <Select name="size" onChange={handleFIlter} defaultValue=''>
                        <Option value='' >Size</Option>
                        <Option>60gr</Option>
                        <Option>100gr</Option>
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
            <Products filters={filters} sort={sort} />
        </Container>
        <Footer />
    </>
    )
}


const Container = styled.div`
`;

const Title = styled.h1`
    margin: 20px 0;
    padding: 0 80px;

    ${mobile({ padding: '0 30px' })}
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 80px;

    ${mobile({ padding: '0 30px' })}
`;

const Filter = styled.div`
    margin: 20px 0;

    ${mobile({ margin: "0 0px", display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
    font-style: 20px;
    font-weight: 600;
`;

const Select = styled.select`
    padding: 10px;
    margin-left: 10px;

    ${mobile({ marginLeft: 0 })}
`;

const Option = styled.option``;


export default Productos