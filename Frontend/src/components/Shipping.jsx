import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from 'react-redux'
import { userInfo } from "../redux/userSlice";
import { useNavigate } from 'react-router-dom'


const Shipping = () => {

    const user = useSelector(state => state.persistedReducer.user.customerInfo);
    console.log(user);
    const dispatch = useDispatch();
    
    const navigate = useNavigate()

    const initialState = {
        name: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        neighborhood: '',
        city: '',
    }

    const [formValues, setFormValues] = useState(user || initialState)
    console.log(formValues);

    const {name, lastName, phoneNumber, address, neighborhood, city} = formValues

    const handleChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(userInfo(formValues));
        navigate('/order')
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <span>Información del cliente</span>
                <input onChange={handleChange} value={name} name="name" type="text" placeholder="Nombre" />
                <input onChange={handleChange} value={lastName} name="lastName" type="text" placeholder="Apellido" />
                <input onChange={handleChange} value={phoneNumber} name="phoneNumber" type="text" placeholder="Teléfono móvil"/>
                <input onChange={handleChange} value={address} name="address" type="text" placeholder="Dirección" />
                <input onChange={handleChange} value={neighborhood} name="neighborhood" type="text" placeholder="Barrio" />
                <input onChange={handleChange} value={city} name="city" type="text" placeholder="Ciudad" />
                <button name="" type="submit">Cotinue</button>
            </Form>
        </Container>
    );
};

const Container = styled.div`
    height: calc(100vh - 88px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${mobile({ padding: "20px", alignItems: "flex-start" })}
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 450px;
    gap: 18px;
    box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;

    span {
        color: teal;
        font-weight: 600;
    }

    input {
        padding: 10px 5px;
        font-size: 0.8rem;
        outline: 1px lightgray solid;
        border: none;
        border-radius: 4px;

        :focus {
            outline: 1px teal solid;
            box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
        }
    }

    button {
        border: none;
        padding: 15px;
        font-size: 1rem;
        font-weight: 550;
        background-color: #008080ae;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        transition: all 0.2s ease;

        :hover {
            background-color: teal;
        }
    }
`;

export default Shipping;
