import React from "react";
import styled from "styled-components";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PersonOutlineOutlined,
    StorefrontOutlined,
    AttachMoneyOutlined,
    AssessmentOutlined,
    EmailOutlined,
    ForumOutlined,
    ChatBubbleOutlineOutlined,
    WorkOutlineOutlined,
    Report
} from "@mui/icons-material";
import BarList from "./BarList";
import { NavLink } from "react-router-dom";


const SideBar = () => {

    return (
        <Aside>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarTitle>Dashboard</SideBarTitle>
                    <SideBarList>
                        <BarList  title={"Home"} icon={<LineStyle />} />
                        <BarList  title={"Analytics"} icon={<Timeline />} />
                        <BarList  title={"Sales"} icon={<TrendingUp />} />
                    </SideBarList>
                </SideBarMenu>

                <SideBarMenu>
                    <SideBarTitle>Quick Menu</SideBarTitle>
                    <SideBarList>
                        <SLink to='/user'>
                            <BarList title={"Users"} icon={<PersonOutlineOutlined />} />
                        </SLink>
                        <SLink to='/product'>
                           <BarList title={"Products"} icon={<StorefrontOutlined />} />
                        </SLink>
                        <BarList title={"Transactions"} icon={<AttachMoneyOutlined />} />
                        <BarList title={"Reports"} icon={<AssessmentOutlined />} />
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
