import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import Chart from '../components/panel/chart/Chart'
import { productData } from "../dummyData";

const ProductPage = () => {
    return (
        <Container>
            <ProductTitleContainer>
                <h1>Product</h1>
                <Link to='/newproduct'>
                    <button>Create</button>
                </Link>
            </ProductTitleContainer>

            <ProductTop>
                <ProductTopLeft>
                    <Chart data={productData} dataKey='Sales' title='Sales Performance' />
                </ProductTopLeft>
                <ProductTopRight>
                    <ProductInfoTop>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBSne0wBmcYU5QQzNG8QMGkm0pGd1AGU6ig&usqp=CAU" alt="" />
                        <span>Apple Airpods</span>
                    </ProductInfoTop>
                    <ProductInfoBottom>
                        <ProductInfoIem>
                            <span>id: </span>
                            <span>123</span>
                        </ProductInfoIem>
                        <ProductInfoIem>
                            <span>Sales: </span>
                            <span>5123</span>
                        </ProductInfoIem>
                        <ProductInfoIem>
                            <span>Active: </span>
                            <span>yes</span>
                        </ProductInfoIem>
                        <ProductInfoIem>
                            <span>in stock: </span>
                            <span>no</span>
                        </ProductInfoIem>
                    </ProductInfoBottom>
                </ProductTopRight>
            </ProductTop>
            <ProductBottom>
                <form>
                    
                </form>
            </ProductBottom>

        </Container>
    );
};

const ProductInfoIem = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;

    span{
        font-weight: 600;
    }

    span:last-child {
        font-weight: 300;
    }
`

const ProductInfoTop = styled.div`
    display: flex;
    align-items: center;
    

   img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 10px;
    }
`

const ProductInfoBottom = styled.div`
    margin-top: 10px;

`

const ProductTop = styled.div`
    display: flex;
`

const ProductTopLeft = styled.div`
    flex: 1;
`

const ProductTopRight = styled.div`
    flex: 1;
    padding: 20px;
    margin: 20px;
    box-shadow: 0 0 15px -10px rgba(0,0,0,0.75);

`

const ProductBottom = styled.div`
    padding: 20px;
    margin: 20px;
    box-shadow: 0 0 15px -10px rgba(0,0,0,0.75);
`

const Container = styled.div`
    flex: 4;
    padding: 20px;
`;

const ProductTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        width: 80px;
        border: none;
        padding: 5px;
        background-color: teal;
        color: white;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;

    }
`
export default ProductPage;
