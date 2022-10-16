import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from 'react-redux'
import { userInfo } from "../redux/userSlice";
import { useNavigate } from 'react-router-dom'
import axios from "axios";


const Shipping = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const user = useSelector(state => state.persistedReducer.user.customerInfo);

    const initialState = {
        name: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        neighborhood: '',
        departamento: '',
        municipio: '',
    }

    const [ departamentos, setDepartamentos ] = useState([]) // This state to store departamentos coming from the API call
    const [ municipios, setMunicipios ] = useState([]) // This state to store municipios coming from the API call

    const [formValues, setFormValues] = useState( JSON.stringify(user) !== '{}' && user || initialState )
    const { name, lastName, phoneNumber, address, neighborhood, departamento, municipio } = formValues

    useEffect(() => {
        const getDepartamentosData = async () => {
            const { data } = await axios.get(
                `https://www.datos.gov.co/resource/xdk5-pm3f.json?$select=departamento&$group=departamento`,{
                    headers: {
                        'X-App-Token': 'MgYCRMOayxwF6m662Qq2qA908'
                    }
                }
            );
            const sortedDepartamentos = data.map(depart => depart.departamento)
            setDepartamentos(sortedDepartamentos.sort())
        };
        getDepartamentosData();
    }, []);

    useEffect(() => {
        const getMunicipiosData = async () => {
            const { data } = await axios.get(
                `https://www.datos.gov.co/resource/xdk5-pm3f.json?$select=municipio&$where=departamento=='${departamento}'`,{
                    headers: {
                        'X-App-Token': 'MgYCRMOayxwF6m662Qq2qA908'
                    }
                }
            );
            const sortedMunicipios = data.map(municipio => municipio.municipio)
            setMunicipios(sortedMunicipios.sort())
        };
        getMunicipiosData();
    }, [departamento]);
   
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
                <select onChange={handleChange} name='departamento' value={departamento}>
                    <option>Departamento</option>
                    {
                        departamentos?.sort().map(item => (
                            <option key={item} >{item}</option>
                        ))
                    }
                </select>
                <select onChange={handleChange} name='municipio' value={municipio}>
                    <option>Municipio</option>
                    {
                        municipios.map(item => (
                            <option key={item} >{item}</option>
                        ))
                    }
                </select>
                <input onChange={handleChange} value={address} name="address" type="text" placeholder="Dirección" />
                <input onChange={handleChange} value={neighborhood} name="neighborhood" type="text" placeholder="Barrio" />
                <button name="" type="submit">Cotinue</button>
            </Form>
        </Container>
    );
};

const Container = styled.div`
    /* height: calc(100vh - 88px); */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;

    ${mobile({ padding: "20px", alignItems: "flex-start", padding: '2rem' })}
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 18px;
    background-color: white;
    box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;

    ${mobile({ width: '340px' })}

    span {
        color: teal;
        font-weight: 600;
    }

    input, select {
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

    select{
        color: gray;
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
