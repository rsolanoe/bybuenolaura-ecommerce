import React from "react";
import styled from "styled-components";

const NewUser = () => {
    return (
        <NewUserContainer>
            <UserTitle>New User</UserTitle>    
            <UserForm> 
                <NewUseritem>
                    <label>Username</label>
                    <input type="text" placeholder="John"/>
                </NewUseritem>
                <NewUseritem>
                    <label>Full name</label>
                    <input type="text" placeholder="John Smith"/>
                </NewUseritem>
                <NewUseritem>
                    <label>Email</label>
                    <input type="emil" placeholder="john@gmail.com"/>
                </NewUseritem>
                <NewUseritem>
                    <label>Password</label>
                    <input type="password" placeholder="john@gmail.com"/>
                </NewUseritem>
                <NewUseritem>
                    <label>Phone</label>
                    <input type="text" placeholder="+573008602778"/>
                </NewUseritem>
                <NewUseritem>
                    <label>Address</label>
                    <input type="text" placeholder="9700 NW 112th ave Miami, FL 33178"/>
                </NewUseritem>
                <NewUseritem>
                    <label>Gender</label>
                    <NewUserGender>
                        <input type="radio" name="gender" id="male" value='male'/>
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value='female'/>
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value='other'/>
                        <label for="other">Other</label>
                    </NewUserGender>
                </NewUseritem>
                <NewUseritem>
                    <label>Active</label>
                    <select name="active" id='active'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </NewUseritem>
                <Button>Create</Button>
            </UserForm>
        </NewUserContainer>
    );
};

const Button = styled.button`
    width: 200px;
    border: none;
    background-color: darkblue;
    color: white;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;
`

const NewUserContainer = styled.div`
    flex: 4;
    padding: 20px;
`

const UserTitle = styled.h1`
    
`

const UserForm = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const NewUseritem = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 20px;

    select {
        height: 40px;
        border-radius: 5px;
    }

    & > label {
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 600;
        color: rgb(151, 150, 150);
    }

    & > input {
        height: 20px;
        padding: 20px;
        border: 1px solid lightgray;
        border-radius: 5px;
    }

`

const NewUserGender = styled.div`
    

    & > input {
        margin-top: 15px;
    }

    & > label {
        margin: 10px;
        font-size: 18px;
        color: #555;
    }
`


export default NewUser;
