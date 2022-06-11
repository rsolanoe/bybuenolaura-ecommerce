import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from 'react-router-dom'
import Chart from '../components/panel/chart/Chart'
import { productData } from "../dummyData";
import { useSelector } from 'react-redux'
import PublishIcon from '@mui/icons-material/Publish';
import { options } from '../dummyData'
import axios from 'axios'

const ProductPage = () => {

    const {id} = useParams()
    const { accessToken } = useSelector( state => state.persistedReducer.user.currentUser);
    const { products } = useSelector( state => state.persistedReducer.products);

    const [pStats, setPStats] = useState([])
    console.log(pStats)

    const selectedProduct = products.find( product => product._id === id )


    useEffect(() => {
    
        const getData = async () => {

            const { data } = await axios.get(`http://localhost:5000/api/orders/stats?pid=${id}`, {
                headers: {
                    token: `Beared ${accessToken}`
                }
            })
            console.log(data);
            data.map( item => {
                setPStats( prev => [
                    ...prev,
                    {
                        mes: options.months[item._id - 1],
                        "Monto": item.sales
                    }
                ])
            })

        }

        getData()

    }, [])
    




    return (
        <Container>
            <ProductTitleContainer>
                <h1>Product</h1>
            </ProductTitleContainer>

            <ProductTop>
                <ProductTopLeft>
                    {
                        pStats.length > 0 && <Chart data={pStats} dataKey='Monto' title='Sales Performance' />
                    }
                </ProductTopLeft>
                <ProductTopRight>
                    <ProductInfoTop>
                        <img src={selectedProduct.img} alt="" />
                        <span>{selectedProduct.title}</span>
                    </ProductInfoTop>
                    <ProductInfoBottom>
                        <ProductInfoIem>
                            <span>id: </span>
                            <span> {selectedProduct._id}</span>
                        </ProductInfoIem>
                        <ProductInfoIem>
                            <span>Sales: </span>
                            <span>5123</span>
                        </ProductInfoIem>
                        <ProductInfoIem>
                            <span></span>
                        </ProductInfoIem>
                        <ProductInfoIem>
                            <span>in stock: </span>
                            <span>{JSON.stringify(selectedProduct.inStock)}</span>
                        </ProductInfoIem>
                    </ProductInfoBottom>
                </ProductTopRight>
            </ProductTop>

            <ProductBottom>
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder={selectedProduct.title} />
                        <label>Product Description</label>
                        <input type="text" placeholder='Ingrese descripción del producto' />
                        <label>Price</label>
                        <input type="text" placeholder={selectedProduct.price} />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={selectedProduct.img} alt="" className="productUploadImg" />
                            <label for="file">
                                <PublishIcon />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </ProductBottom>

        </Container>
    );
};

const ProductInfoIem = styled.div`
    /* width: 150px; */
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
    margin: 20px 0;
`

const ProductTopLeft = styled.div`
    /* flex: 1; */
    width: 35%;
`

const ProductTopRight = styled.div`
    /* flex: 1; */
    width: 35%;
    padding: 20px;
    margin: 0 20px;
    box-shadow: 0 0 15px -10px rgba(0,0,0,0.75);

`

const ProductBottom = styled.div`
    padding: 20px;
    margin: 35px 0;
    box-shadow: 0 0 15px -10px rgba(0,0,0,0.75);

    .productForm {
        display: flex;
        justify-content: space-between;
    }

    .productFormLeft {
        display: flex;
        flex-direction: column;
        width: 300px;

        select {
            width: 25%;
        }
    }

    .productFormLeft > label {
        margin-bottom: 10px;
        color: gray;
    }

    .productFormLeft > input {
        margin-bottom: 10px;
        border: none;
        padding: 5px;
        border-bottom: 1px solid gray;
    }

    .productFormLeft >select{
        margin-bottom: 10px;
    }

    .productUploadImg{
        width: 150px;
        height: 150px;
        border-radius: 7px;
        object-fit: cover;
        margin-right: 20px;
    }

    .productFormRight{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .productUpload{
        display: flex;
        align-items: center;
    }

    .productButton{
        border: none;
        padding: 5px;
        border-radius: 5px;
        background-color: darkblue;
        color:white;
        font-weight: 600;
        cursor: pointer;
    }
`

const Container = styled.div`
    flex: 4;
    padding: 20px;
`;

const ProductTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin: 0 20px; */
`
export default ProductPage;
