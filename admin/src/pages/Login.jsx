import React from "react";
import styled from "styled-components";
// import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";
// import { useNavigate, Link } from "react-router-dom";
// import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";

import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
    // const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch, { email, password });
        // navigate(-1)
    };

    const handleActiveInput = ({ target }) => {
        setEmailInput(target.name);
    };

    const handlePasswordInput = ({ target }) => {
        setPasswordInput(target.name);
    };

    return (
        <Container>
            <Wrapper>
                <Title>Login</Title>
                <Form onSubmit={handleLogin}>
                    <label className={emailInput}>Email</label>
                    <InputContainer className="emailContainer">
                        <EmailIcon />
                        <Input
                            name="email"
                            onFocus={handleActiveInput}
                            onBlur={() => setEmailInput("")}
                            type="email"
                            placeholder="abc123@gmail.com"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                            autoComplete="off"
                            required
                        />
                    </InputContainer>

                    <label className={passwordInput}>Clave</label>
                    <InputContainer>
                        <LockIcon />
                        <Input
                            name="password"
                            onFocus={handlePasswordInput}
                            onBlur={() => setPasswordInput("")}
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                            required
                        />
                    </InputContainer>
                    <Button type="submit" >LOGIN</Button>

                </Form>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    height: calc(100vh - 98px);
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 30%;
    padding: 27px;
    background-color: white;
    box-shadow: 0 0 15px -10px gray;

`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 1.2rem;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;

    label {
        font-size: 12px;
        color: #868686;

        &.email + div {
            outline: 1px solid #38d430;
        }

        &.password + div {
            outline: 1px solid #38d430;
        }
    }

    svg {
        font-size: 1rem;
        color: #868686;
    }

    a {
        margin: 5px 0px;
        font-size: 12px;
        text-decoration: underline;
        cursor: pointer;
        color: #868686;
    }
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    padding: 10px;
    border: none;

    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin: 15px 0;
    border-radius: 5px;
`;

// const Link = styled.a`
//     margin: 5px 0px;
//     font-size: 12px;
//     text-decoration: underline;
//     cursor: pointer;
// `;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #86868668;
    border-radius: 3px;
    padding-left: 10px;
    margin-bottom: 10px;

    transition: all 0.1s ease;

    &.emailContainer {
        margin-bottom: 25px;
    }
`;

export default Login;