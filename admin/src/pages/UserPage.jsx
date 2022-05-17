import React from "react";
import styled from 'styled-components'
import {LocationSearching, MailOutline, PhoneAndroid, CalendarToday, PermIdentity, Publish} from '@mui/icons-material';
import { Link } from 'react-router-dom'


const UserPage = () => {
    return (
        <Container>
            <TitleContainer>
                <UserTitle>Edit User</UserTitle>
                <Link to='/newUser'>
                    <Button>Create</Button>
                </Link>
            </TitleContainer>

            <UserContainer>
                <UserInfoContainer>
                    <TopContainer>
                        <img src="https://as01.epimg.net/meristation/imagenes/2022/01/05/reportajes/1641379658_031391_1641379891_noticia_normal.jpg" alt="" />
                        <UserJobContainer>
                            <Username>Anna Becker</Username>
                            <JobTitle>Software Engineer</JobTitle>
                        </UserJobContainer>                        
                    </TopContainer>

                    <BottomContainer>
                        <JobInfo>Account Details</JobInfo>
                        <InfoContainer>
                            <PermIdentity />
                            <InfoTitle>annabeck99</InfoTitle>
                        </InfoContainer>
                        <InfoContainer>
                            <CalendarToday />
                            <InfoTitle>10.12.1992</InfoTitle>{/*  */}
                        </InfoContainer>
                        <JobInfo>Contact Details</JobInfo>
                        <InfoContainer>
                            <PhoneAndroid />
                            <InfoTitle>+3008602778</InfoTitle>{/*  */}
                        </InfoContainer>
                        <InfoContainer>
                            <MailOutline />
                            <InfoTitle>annabeck99@gmail.com</InfoTitle>{/*  */}
                        </InfoContainer>
                        <InfoContainer>
                            <LocationSearching />
                            <InfoTitle>9700 NW 112th Ave Miami, FL 33178</InfoTitle>{/*  */}
                        </InfoContainer>
                    </BottomContainer>
                </UserInfoContainer>

                <UserUpdateContainer>
                    <UpdateTitle>Edit</UpdateTitle>{/* span */}
                    <UpdateForm>{/* form */}
                        <FormLeft>{/* div */}
                            <UpdateItem>
                                <label>Username</label>
                                <input type="text" placeholder="annabeck99"/>
                            </UpdateItem>
                            <UpdateItem>
                                <label>Fullname</label>
                                <input type="text" placeholder="Anna Becker"/>
                            </UpdateItem>
                            <UpdateItem>
                                <label>Email</label>
                                <input type="text" placeholder="annabeck99@gmail.com"/>
                            </UpdateItem>
                            <UpdateItem>
                                <label>Phone</label>
                                <input type="text" placeholder="+3008602778"/>
                            </UpdateItem>
                            <UpdateItem>
                                <label>Address</label>
                                <input type="text" placeholder="9700 NW 112th Ave Miami, FL 33178"/>
                            </UpdateItem>
                        </FormLeft>
                        <FormRight>{/* div */}
                            <UpdateUpload>
                                <img src="https://as01.epimg.net/meristation/imagenes/2022/01/05/reportajes/1641379658_031391_1641379891_noticia_normal.jpg" />
                                <label htmlFor="file"><Publish /></label>
                                <input type="file" id='file' style={{display: 'none'}} />
                            </UpdateUpload>
                            <UpdateButton>Update</UpdateButton>
                        </FormRight>
                    </UpdateForm>
                </UserUpdateContainer>
            </UserContainer>
        </Container>
    );
};

const UpdateButton = styled.button`
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-weight: 600;
`

const UpdateUpload = styled.div`
    display: flex;
    align-items: center;

    svg {
        cursor: pointer;
    }
    
    img {
        width: 100px;
        height: 100px;
        border-radius: 10px;
        object-fit: cover;
        margin-right: 15px;
    }

`

const UpdateTitle = styled.span`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
    display: block;
`

const UpdateForm = styled.form`
    display: flex;
    justify-content: space-between;
`

const FormLeft = styled.div`

`

const UpdateItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    label {
        font-size: 14px;
    }

    input {
        border: none;
        width: 250px;
        border-bottom: 1px solid gray;
        height: 30px;
        padding: 0 10px;
    }

    input:focus{
            outline: none;
        }

`

const FormRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
    color: #444;

    svg {
        font-size: 16px;
    }
`

const JobInfo = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #6d6d6d;
`

const InfoTitle = styled.span`
    margin-left: 10px;
`

const BottomContainer = styled.div`
    margin-top: 15px;
`

const Username = styled.span`
    font-weight: 600;
`

const JobTitle = styled.span`
    font-weight: 300;
`

const UserJobContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const TopContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    }
`

const UserContainer = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
`

const UserInfoContainer = styled.div`
    flex: 1;
    padding: 20px;
    box-shadow: 0 0 15px -10px rgba(0,0,0,0.75);
`

const UserUpdateContainer = styled.div`
    flex: 2;
    padding: 20px;
    box-shadow: 0 0 15px -10px rgba(0,0,0,0.75);
`

const Container = styled.div`
    flex: 4;
    padding: 20px;
`

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const UserTitle = styled.h1`
    
`

const Button = styled.button`
    width: 80px;
    border: none;
    padding: 5px;
    background-color: teal;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    font-size: 16px;

`

export default UserPage;
