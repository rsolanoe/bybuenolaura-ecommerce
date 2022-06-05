import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/apiCalls";
import Swal from "sweetalert2";

const Register = () => {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        fName: "",
        lName: "",
        cedula: "",
        email: "",
        password1: "",
        password2: "",
    });

    const { fName, lName, cedula, email, password, password2 } = form;

    const handleInputChange = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value,
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== password2) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Las contraseñas deben ser iguales`,
            });
        }
        register(dispatch, { fName, lName, cedula, email, password });
    };

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handleRegister}>
                    <Input
                        autoComplete="off"
                        name="fName"
                        value={fName}
                        onChange={handleInputChange}
                        placeholder="name"
                        required
                    />
                    <Input
                        autoComplete="off"
                        name="lName"
                        value={lName}
                        onChange={handleInputChange}
                        placeholder="last name"
                        required
                    />
                    <Input
                        autoComplete="off"
                        name="cedula"
                        value={cedula}
                        onChange={handleInputChange}
                        placeholder="cedula"
                        required
                    />
                    <Input
                        autoComplete="off"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        type="email"
                        placeholder="email"
                        required
                    />
                    <Input
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        type="password"
                        placeholder="password"
                        required
                    />
                    <Input
                        name="password2"
                        value={password2}
                        onChange={handleInputChange}
                        type="password"
                        placeholder="confirm password"
                        required
                    />
                    <Agreement>
                        By creating an account, I consent to the processing of
                        my personal data in accordance with the{" "}
                        <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button type="submit">CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    height: calc(100vh - 98px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    box-shadow: 0 0 15px -10px gray;

    ${mobile({ width: "90%" })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

export default Register;
