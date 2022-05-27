import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaUserAlt } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import OrderItem from '../components/OrderItem';
import { useSelector } from "react-redux";
import { mobile } from '../responsive';
import md5 from 'md5'



const OrderScreen = () => {

    const {products, total} = useSelector(state => state.persistedReducer.cart);
    const {name, lastName, phoneNumber, address, neighborhood, departamento, municipio} = useSelector(state => state.persistedReducer.user.customerInfo);
    const {email} = useSelector(state => state.persistedReducer.user.currentUser);

    const [ signature, setSignature ] = useState('')
    const [ secretCode, setSecretCode ] = useState('')

    useEffect(() => {
        const generateSignature = () => {
            const apiKey = '4Vj8eK4rloUd272L48hsrarnUA';
            const merchantId = '508029'
            const referenceCode = new Date().getTime()
            setSecretCode(referenceCode)
            const hashedSign = md5(`${apiKey}~${merchantId}~${referenceCode}~${total}~COP`)
            setSignature(hashedSign);
        }
        generateSignature()

    }, [])
       
    return (
        <Container>
            <TopContainer>
                <OrderItem icon={<FaUserAlt/>} title='Cliente' infoTop={name + ' ' + lastName} infoBottom={email}  />
                <OrderItem icon={<MdLocalShipping/>} title='Order info' infoTop={`${municipio} - ${departamento}`} infoBottom={phoneNumber}  />
                <OrderItem icon={<IoLocationSharp/>} title='Deliver to' infoTop={address} infoBottom={neighborhood}  />
            </TopContainer>
            <BottomContainer>
                <ProductsContainer>
                    {
                        products.map(product => (
                            
                                <ProductContainer key={product.title}>
                                    <ProductInfoContainer>
                                        <ProductImgContainer><img src={product.img} alt={product.title} /></ProductImgContainer>
                                        <p>{product.title}</p>
                                    </ProductInfoContainer>
                                    <ProductPriceContainer>
                                        <QuantityContainer>
                                            <p>Quantity</p>
                                            <p>{product.quantity}</p>
                                        </QuantityContainer>
                                        <PriceContainer>
                                            <p>Subtotal</p>
                                            <p>{product.quantity * product.price}</p>
                                        </PriceContainer>
                                    </ProductPriceContainer>
                                </ProductContainer>
                            
                        ))
                    }
                </ProductsContainer>

                <DetailContainer>
                    <OrderInfoContainer>
                        <table>
                            <tr>
                                <td>Products</td>
                                <td>${total}</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>$0</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>${total}</td>
                            </tr>
                        </table>
                    </OrderInfoContainer>
                    <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
                        <input name="merchantId"         type="hidden"  value="508029"   /> {/* esta info viende de la cuenta de PayU cuando te registras */}
                        <input name="accountId"          type="hidden"  value="512321" /> {/* esta info viende de la cuenta de PayU cuando te registras */}
                        <input name="description"        type="hidden"  value="baq1rosolano"  />
                        <input name="referenceCode"      type="hidden"  value={secretCode} />
                        <input name="amount"             type="hidden"  value={total}   />
                        <input name="tax"                type="hidden"  value="0"  />
                        <input name="taxReturnBase"      type="hidden"  value="0" />
                        <input name="currency"           type="hidden"  value="COP" />
                        <input name="signature"          type="hidden"  value={signature} /> {/* hay que encriptar y concatenar con MD5 */}
                        <input name="test"               type="hidden"  value="0" />
                        <input name="buyerEmail"         type="hidden"  value="rjsolanoe@gmail.com" /> {/* este email viene de la pagina */}
                        <input name="responseUrl"        type="hidden"  value="http://localhost:3000/payu" />
                        <input name="confirmationUrl"    type="hidden"  value="https://bybuenolaurae.herokuapp.com/payufinish" />
                        <input name="shippingAddress"    type="hidden"  value={address}   />
                        <input name="shippingCity"       type="hidden"  value={municipio} />
                        <input name="shippingCountry"    type="hidden"  value="CO"  />{/* user gives this info */}
                        <Input name="Submit"             type="submit"  value="Pagar" />
                    </form>
                </DetailContainer>

            </BottomContainer>

           
        </Container>
    )
}

const Input = styled.input`
    width: 100%;
    padding: 6px 0;
    border: none;
    background-color: teal;
    color: white;
    font-weight: 600;
    cursor: pointer;
`

const DetailContainer = styled.div`
    flex: 1;
`

const OrderInfoContainer = styled.div`

    margin-bottom: 10px;

    table{
        width: 100%;
        height: 120px;

        tr{
            width: 50%;
            background-color: #e7e7e7da;
            
            &:first-child {
                color: red;
            }

        }

        td{
            padding-left: 5px;
            color: #4b4b4b;
        }
    }

    table, th, td {
        border: 1px solid #afafaf;
        border-collapse: collapse;
    }
`

const ProductsContainer = styled.div`
    flex: 3;
    /* ${mobile({width: '2'})} */
`

const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
`

const Container = styled.div`
    height: calc(100vh - 88px);
    ${mobile({height: 'auto', display: 'flex', flexDirection:'column', alignItems: 'center'})}
`

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    margin: 2rem auto;
    padding: 30px 40px;
    background-color: #1d80804b;
    border-radius: 10px;

    ${mobile({flexDirection: 'column',width: '95vw', padding: '10px', gap:'5px', margin: '1rem auto 0'})}

`

const BottomContainer = styled.div`
    padding: 0 40px;
    width: 80vw;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    gap: 7em;

    ${mobile({padding: '0 10px', width: '95vw', justifyContent: 'center', flexDirection: 'column', gap: '1rem'})}
`

const ProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding-bottom: 8px;
    border-bottom: 1px solid lightgray;

`

const ProductInfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    p {
        font-size: 13px;

        ${mobile({width: '60%', marginRight:'7px'})}
    }

    ${mobile({gap: '1rem', justifyContent:'flex-start'})}
`

const ProductImgContainer = styled.div`
    width: 60px;
    height: 60px;

    ${mobile({width: '60px', height: '60px'})}

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ProductPriceContainer = styled.div`
    display: flex;
    gap: 2rem;

    ${mobile({gap: '1rem'})}

    p {
        font-size: 13px;
    }
`

const QuantityContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
`

export default OrderScreen