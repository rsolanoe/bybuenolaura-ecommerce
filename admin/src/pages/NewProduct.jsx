import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from 'react-redux'
import axios from 'axios'

const NewProduct = () => {

    const initialValue = {
        img: '', 
        title: '', 
        description: '', 
        price: '', 
        categories: '',
    }
    const [inputs, setInputs] = useState(initialValue)
    console.log(inputs)
    const { img, title, description, price, categories, } = inputs

    const {accessToken} = useSelector(state => state.persistedReducer.user.currentUser);

    const handleChange = ({ target }) => {
        setInputs({
            ...inputs,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const addProduct = async () => {
            const { data } = await axios.post('http://localhost:5000/api/products', inputs, {
                headers: {
                    token: `Bearer ${accessToken}`
                }
            })
            console.log(data);
        }
        addProduct()
        

        setInputs(initialValue)
    }

    return (
        <NewProductContainer>
            <Title>Nuevo Producto</Title>
            <Form onSubmit={handleSubmit}>
                <AddProductItem>
                    <label>Imagen</label>
                    {/* <input type="file" id="file" /> */}
                    <input onChange={handleChange} value={img} name="img" type="text" placeholder="images'url"/>
                </AddProductItem>
                <AddProductItem>
                    <label>Titulo</label>
                    <input onChange={handleChange} value={title} name="title" type="text" placeholder="Apple Airpods"/>
                </AddProductItem>
                <AddProductItem>
                    <label>Descripción</label>
                    <input onChange={handleChange} value={description} name="description" type="text" placeholder="descripción..." />
                </AddProductItem>
                <AddProductItem>
                    <label>Precio</label>
                    <input onChange={handleChange} value={price} name="price" type="number" placeholder="12500" />
                </AddProductItem>
                <AddProductItem>
                    <label>Categoría</label>
                    <input onChange={handleChange} value={categories} name="categories" type="text" placeholder="Mascarilla" />
                </AddProductItem>
                <AddProductItem>
                    <label>Stock</label>
                    <select name="inStock" onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>{" "}
                </AddProductItem>
                <Button type="submit">Crear</Button>
            </Form>
        </NewProductContainer>
    );
};

const Form = styled.form`
    margin-top: 10px;
`;

const AddProductItem = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    label {
        color: gray;
        font-weight: 600;
        margin-bottom: 10px;
    }

    input, select {
        padding: 10px;
    }
`;

const Button = styled.button`
    margin-top: 10px;
    padding: 7px 10px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-weight: 600;
    cursor: pointer;
`

const NewProductContainer = styled.section`
    flex: 4;
    padding: 20px;
`;

const Title = styled.h1``;

export default NewProduct;
