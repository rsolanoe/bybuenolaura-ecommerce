import React, { useState } from "react";
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from '../dummyData'
import { Link } from 'react-router-dom'



const ProductList = () => {

    const [data, setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'product', headerName: 'Product', width: 350, renderCell: ({row}) => {
            return (
                <ProductListItem>
                    <img src={row.image} alt="" />
                    {row.name}
                </ProductListItem>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 45 },
        { field: 'status', headerName: 'Status', width: 80 },
        { field: 'price', headerName: 'Price', width: 120},
        { field: 'action', headerName: 'Action', width: 150, renderCell: ({row}) => {
            return (
                <>
                    <Link to={`/product/${row.id}`}>
                        <Button>Edit</Button>
                    </Link>
                    <DeleteIcon onClick={() => handleDelete(row.id)} />
                </>
            )
        } }
      ];

    return (
        <Container>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </Container>
    )
}

const Container = styled.div`
    flex: 4;
`

const ProductListItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    
    img {
        width: 32px;
        height: 32px;
        //border-radius: 50%;
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

export default ProductList