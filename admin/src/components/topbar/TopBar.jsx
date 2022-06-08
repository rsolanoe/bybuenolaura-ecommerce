import React from "react";
import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from "react-redux";
import { Logout } from "../../redux/apiCalls";


const TopBar = () => {

    const dispatch = useDispatch();
    const handleLogout = () => {
        Logout(dispatch)
    }

    return (
        <NavBar>
            <TopBarWrapper>
                <TopLeft>
                    <figure>
                        <img src="https://res.cloudinary.com/dezaizbpb/image/upload/v1652450221/test/WhatsApp_Image_2022-05-12_at_10.00.12_PM_qng18y.jpg" />
                    </figure>
                </TopLeft>
                <TopRight>
                    <TopRightIconContainer>
                        <NotificationsNone />
                        <span>2</span>
                    </TopRightIconContainer>
                    <TopRightIconContainer>
                        <Language />
                        <span>2</span>
                    </TopRightIconContainer>
                    <TopRightIconContainer>
                        <Settings />
                    </TopRightIconContainer>
                    <TopRightIconContainer onClick={handleLogout}>
                        <LogoutIcon />
                    </TopRightIconContainer>
                </TopRight>
            </TopBarWrapper>
        </NavBar>
    );
};

const NavBar = styled.nav`
    width: 100%;
    background-color: white;
    position: sticky;
    top: 0;
    box-shadow: 0 0 9px lightgrey;
    z-index: 9999;
`;

const TopBarWrapper = styled.div`
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TopLeft = styled.div`
    height: 68px;
    display: flex;

    figure {
        cursor: pointer;

        img {
            height: 100%;
            //width: 500px;
            //object-fit: contain;
        }
    }
`;

const TopRight = styled.div`
    display: flex;
    gap: 7px;
`;

const TopRightIconContainer = styled.div`
    position: relative;
    cursor: pointer;
    color: #808080b2;
    
    span {
        position: absolute;
        width: 15px;
        height: 15px;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -3px;
        right: 0px;
        border-radius: 50%;
        background-color: red;
        color: white;
    }
`;

export default TopBar;
