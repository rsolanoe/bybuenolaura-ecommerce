import React from "react";
import styled from "styled-components";
import { Visibility } from "@mui/icons-material";


const WidgetSm = () => {
    return (
        <WidgetSmContainer>
            <Title>New Join Members</Title>
            <List>
                <ListItem>
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHflWGiggxbtw/profile-displayphoto-shrink_200_200/0/1564163412664?e=1658361600&v=beta&t=GPdZTiv6qkUIjy7ReRUMOZ87Y8vPcBqUqhxZ7zbmHQE" />
                    <UserInfo>
                        <Username>Rodolfo Solano</Username>
                        <UserJobTitle>Software Engineer</UserJobTitle>
                    </UserInfo>
                    <Button>
                        <Visibility />
                        Display
                    </Button>
                </ListItem>
                <ListItem>
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHflWGiggxbtw/profile-displayphoto-shrink_200_200/0/1564163412664?e=1658361600&v=beta&t=GPdZTiv6qkUIjy7ReRUMOZ87Y8vPcBqUqhxZ7zbmHQE" />
                    <UserInfo>
                        <Username>Rodolfo Solano</Username>
                        <UserJobTitle>Software Engineer</UserJobTitle>
                    </UserInfo>
                    <Button>
                        <Visibility />
                        Display
                    </Button>
                </ListItem>
                <ListItem>
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHflWGiggxbtw/profile-displayphoto-shrink_200_200/0/1564163412664?e=1658361600&v=beta&t=GPdZTiv6qkUIjy7ReRUMOZ87Y8vPcBqUqhxZ7zbmHQE" />
                    <UserInfo>
                        <Username>Rodolfo Solano</Username>
                        <UserJobTitle>Software Engineer</UserJobTitle>
                    </UserInfo>
                    <Button>
                        <Visibility />
                        Display
                    </Button>
                </ListItem>
                <ListItem>
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHflWGiggxbtw/profile-displayphoto-shrink_200_200/0/1564163412664?e=1658361600&v=beta&t=GPdZTiv6qkUIjy7ReRUMOZ87Y8vPcBqUqhxZ7zbmHQE" />
                    <UserInfo>
                        <Username>Rodolfo Solano</Username>
                        <UserJobTitle>Software Engineer</UserJobTitle>
                    </UserInfo>
                    <Button>
                        <Visibility />
                        Display
                    </Button>
                </ListItem>
                <ListItem>
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHflWGiggxbtw/profile-displayphoto-shrink_200_200/0/1564163412664?e=1658361600&v=beta&t=GPdZTiv6qkUIjy7ReRUMOZ87Y8vPcBqUqhxZ7zbmHQE" />
                    <UserInfo>
                        <Username>Rodolfo Solano</Username>
                        <UserJobTitle>Software Engineer</UserJobTitle>
                    </UserInfo>
                    <Button>
                        <Visibility />
                        Display
                    </Button>
                </ListItem>
            </List>
        </WidgetSmContainer>
    );
};

const WidgetSmContainer = styled.div`
    flex: 1;
    box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
`;

const Title = styled.span`
    display: block;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 10px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        object-fit: cover;
    }
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const Username = styled.span`
    font-size: 16px;
    font-weight: 600;
    margin-right: 8px;
`;

const UserJobTitle = styled.span`
    font-size: 14px;
    font-weight: 300;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: #555;
   cursor: pointer ;
   font-size: 15px;

   svg {
       font-size: 14px;
       margin-right: 5px;
   }

`

export default WidgetSm;
