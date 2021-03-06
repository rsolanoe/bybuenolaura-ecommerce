import React, { useState } from "react";
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {userRows} from '../dummyData'
import { Link } from 'react-router-dom'


const UserList = () => {

    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: ({row}) => {
            return (
                <UserListUser>
                    <img src={row.avatar} alt="" />
                    {row.username}
                </UserListUser>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'transaction', headerName: 'Transaction Volume', width: 160 },
        { field: 'action', headerName: 'Action', width: 150, renderCell: ({row}) => {
            return (
                <>
                    <Link to={`/user/${row.id}`}>
                        <Button>Edit</Button>
                    </Link>
                    <DeleteIcon onClick={() => handleDelete(row.id)} />
                </>
            )
        } }
      ];
      
      
      
    return (
        <UserListContainer>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </UserListContainer>
    );
};

const UserListContainer = styled.div`
    flex: 4;
`

const UserListUser = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
    }
`

const Button = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
`

const DeleteIcon = styled(DeleteOutlineIcon)`
    color: red;
    cursor: pointer;
    margin-left: 15px;
`

export default UserList;
