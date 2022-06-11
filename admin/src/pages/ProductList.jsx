import React, { useEffect } from "react";
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProducts } from "../redux/apiCalls";



const ProductList = () => {

    const dispatch = useDispatch();
    const {products} = useSelector( state => state.persistedReducer.products);
    const { accessToken } = useSelector( state => state.persistedReducer.user.currentUser)

    console.log(products)

    useEffect(() => {
        getProducts(dispatch)
    }, [dispatch])
    

    const handleDelete = (id) => {
        deleteProduct( id, dispatch, accessToken )
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        { field: 'product', headerName: 'Product', width: 430, renderCell: ({row}) => {
            return (
                <ProductListItem>
                    <img src={row.img} alt="" />
                    {row.title}
                </ProductListItem>
            )
        } },
        { field: 'inStock', headerName: 'Stock', width: 80 },
        // { field: 'status', headerName: 'Status', width: 80 },
        { field: 'price', headerName: 'Price', width: 90},
        { field: 'action', headerName: 'Action', width: 150, renderCell: ({row}) => {
            return (
                <>
                    <Link to={`/product/${row._id}`}>
                        <Button>Edit</Button>
                    </Link>
                    <DeleteIcon onClick={() => handleDelete(row._id)} />
                </>
            )
        } }
      ];

    return (
        <Container>
            <DataGrid
                rows={products}
                columns={columns}
                getRowId={ row => row._id }
                pageSize={10}
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