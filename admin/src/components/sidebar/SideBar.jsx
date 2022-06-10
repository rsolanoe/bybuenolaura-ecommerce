import React from "react";
import styled from "styled-components";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PersonOutlineOutlined,
    StorefrontOutlined,
    AttachMoneyOutlined,
    EmailOutlined,
    ForumOutlined,
    ChatBubbleOutlineOutlined,
    WorkOutlineOutlined,
    Report
} from "@mui/icons-material";
import BarList from "./BarList";
import { NavLink } from "react-router-dom";
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';



const SideBar = () => {

    return (
        <Aside>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarTitle>Dashboard</SideBarTitle>
                    <SideBarList>
                    <SLink to='/'>
                        <BarList  title={"Home"} icon={<LineStyle />} />
                    </SLink>
                    <BarList  title={"Analytics"} icon={<Timeline />} />
                    <BarList  title={"Sales"} icon={<TrendingUp />} />
                    </SideBarList>
                </SideBarMenu>

                <SideBarMenu>
                    <SideBarTitle>Quick Menu</SideBarTitle>
                    <SideBarList>
                        <SLink to='/user'>
                            <BarList title={"Usuarios"} icon={<PersonOutlineOutlined />} />
                        </SLink>
                        <SLink to='/product'>
                           <BarList title={"Productos"} icon={<StorefrontOutlined />} />
                        </SLink>
                        <BarList title={"Agregar Productos"} icon={<AddBusinessOutlinedIcon />} />
                        <BarList title={"Transacciones"} icon={<AttachMoneyOutlined />} />
                    </SideBarList>
                </SideBarMenu>

                <SideBarMenu>
                    <SideBarTitle>Notifications</SideBarTitle>
                    <SideBarList>
                        <BarList title={"Mail"} icon={<EmailOutlined />} />
                        <BarList title={"Feedback"} icon={<ForumOutlined />} />
                        <BarList title={"Messages"} icon={<ChatBubbleOutlineOutlined />} />
                    </SideBarList>
                </SideBarMenu>

                <SideBarMenu>
                    <SideBarTitle>Staff</SideBarTitle>
                    <SideBarList>
                        <BarList title={"Manage"} icon={<WorkOutlineOutlined />} />
                        <BarList title={"Analytics"} icon={<Timeline />} />
                        <BarList title={"Reports"} icon={<Report />} />
                    </SideBarList>
                </SideBarMenu>
            </SideBarWrapper>
        </Aside>
    );
};

const Aside = styled.aside`
    flex: 1;
    height: calc(100vh - 68px);
    background-color: #add8e65e;
    position: sticky;
    top: 68px;
`;

const SideBarWrapper = styled.div`
    padding: 10px;
    color: #555;
`;

const SideBarMenu = styled.div`
    margin-bottom: 10px;
`;

const SideBarTitle = styled.h5`
    font-size: 0.8rem;
    color: #969696;
`;

const SideBarList = styled.ul`
    list-style: none;
    padding: 5px;
`;

const SLink = styled(NavLink)`
    text-decoration: none;
    color: inherit;

    &.active > li {
        font-weight: 600;
        background-color: #97C4B8;
    }
`

export default SideBar;
