import React from "react";
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid';

const UserList = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'transaction', headerName: 'Transaction Volume', width: 160 },
      ];
      
      const rows = [
        { id: 1, username: 'Jon Snow', avatar: 'Jon', email: 'jon@gmail.com', status: 'active', transaction: '$120.00' },
        { id: 2, username: 'Jon Snow', avatar: 'Jon', email: 'jon@gmail.com', status: 'active', transaction: '$120.00' },
        { id: 3, username: 'Jon Snow', avatar: 'Jon', email: 'jon@gmail.com', status: 'active', transaction: '$120.00' },
        { id: 4, username: 'Jon Snow', avatar: 'Jon', email: 'jon@gmail.com', status: 'active', transaction: '$120.00' },
        { id: 5, username: 'Jon Snow', avatar: 'Jon', email: 'jon@gmail.com', status: 'active', transaction: '$120.00' },
        { id: 6, username: 'Jon Snow', avatar: 'Jon', email: 'jon@gmail.com', status: 'active', transaction: '$120.00' },
        { id: 7, username: 'Jon Snow', avatar: 'Jon', email: 'jon@gmail.com', status: 'active', transaction: '$120.00' },
        { id: 8, username: 'Jon Snow', avatar: 'Jon', email: 'jon@gmail.com', status: 'active', transaction: '$120.00' },
        { id: 9, username: 'Jon Snow', avatar: 'Jon', email: 'jon@gmail.com', status: 'active', transaction: '$120.00' },
        { id: 10, username: 'Jon Snow', avatar: 'Jon', email: 'jon@gmail.com', status: 'active', transaction: '$120.00' },

      ];
      
    return (
        <UserListContainer>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </UserListContainer>
    );
};

const UserListContainer = styled.div`
    flex: 4;
`

export default UserList;
