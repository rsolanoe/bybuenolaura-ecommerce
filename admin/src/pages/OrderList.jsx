import React, { useEffect } from "react";
import styled from 'styled-components'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from "../redux/apiCalls";
import VisibilityIcon from '@mui/icons-material/Visibility';
import moment from 'moment'



const OrderList = () => {

    const dispatch = useDispatch();
    const { orders } = useSelector( state => state.persistedReducer.orders);
    const { accessToken } = useSelector( state => state.persistedReducer.user.currentUser)

    const ordersEdited = [...orders].map(tst => ({
        ...tst,
        fullName: `${tst.fName} ${tst.lName}`,
        createdAt: moment(tst.createdAt).format("Do [de] MMMM [del] YYYY"),
        totalPrice: "$"+tst.totalPrice?.toLocaleString('usd'),
        isDelivered: tst.isDelivered ? 'Enviado' : 'Pendiente'
    }))

    console.log(ordersEdited)


    useEffect(() => {
        getOrders(dispatch, accessToken)
    }, [dispatch])

    const columns = [
        { field: 'createdAt', headerName: 'Fecha', width: 180 },
        { field: '_id', headerName: 'Order ID', width: 250 },
        { field: 'fullName', headerName: 'Cliente', width: 230},
        { field: 'totalPrice', headerName: 'Monto', width: 90},
        { field: 'isDelivered', headerName: 'Estado', width: 120 },
        { field: 'action', headerName: 'Acción', width: 110, renderCell: ({row}) => {
            return (
                <>
                    <Link to={`/orders/${row._id}`}>
                        <Button>
                            <VisibilityIcon />
                            Display
                        </Button>
                    </Link>
                </>
            )
        } }
      ];

    return (
        <Container>
            <DataGrid
                rows={ordersEdited}
                columns={columns}
                getRowId={ row => row._id }
                pageSize={12}
                rowsPerPageOptions={[5]}
                // checkboxSelection
                disableSelectionOnClick
                csvOptions={{
                    fileName: 'customerDataBase',
                    delimiter: ';',
                    utf8WithBom: true,
                  }}
                components={{ Toolbar: GridToolbar }}

            />
        </Container>
    )
}

const Container = styled.div`
    flex: 4;

    a {
        text-decoration: none;
    }
`

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

export default OrderList