import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";


const Cart = () => {

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Whislist (0)</TopText>
          </TopTexts>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>

        <Bottom>
          <Info>

            <Product>
              <ProductDetail>
                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName><b>Product: </b>JESSIE THUNDER SHOES</ProductName>
                  <ProductID><b>ID: </b>93817548923</ProductID>
                  <ProductColor color='black' />
                  <ProcutSize><b>Size:</b> 37.5</ProcutSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <IoRemoveSharp />
                  <ProductAmount>2</ProductAmount>
                  <IoAddSharp />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>

            <hr />

            <Product>
              <ProductDetail>
                <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName><b>Product: </b>HAKURA T-SHIRT</ProductName>
                  <ProductID><b>ID: </b>93817548923</ProductID>
                  <ProductColor color='gray' />
                  <ProcutSize><b>Size:</b> M</ProcutSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <IoRemoveSharp />
                  <ProductAmount>2</ProductAmount>
                  <IoAddSharp />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>

          </Info>
          <Summary>
            <SummaryInfo>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type='total'>
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemText>$ 80</SummaryItemText>
              </SummaryItem>
              <SummaryButton>CHECKOUT NOW</SummaryButton>
            </SummaryInfo>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
    
`

const Wrapper = styled.div`
  padding: 20px;
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600; 
  cursor: pointer;
  border: ${({ type }) => type === 'filled' && 'none'};
  background-color: ${({ type }) => type === 'filled' ? 'black' : 'transparent'};
  color: ${({ type }) => type === 'filled' && 'white'}
`

const TopTexts = styled.div`

`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`

const Info = styled.div`
  flex: 3;

  hr {
    border: none;
    background-color: #eee;
    height: 1px;
  }
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;

  img {
    width: 200px;
  }
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
`


const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span`
  
`

const ProductID = styled.span`
  
`

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`

const ProcutSize = styled.span`
  
`

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummaryInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  
  display: flex;
  justify-content: space-between;
  font-weight: ${({ type }) => type === 'total' && '500'};
  font-size: ${({ type }) => type === 'total' && '24px'};
`

const SummaryItemText = styled.span`
  
`

const SummaryItemPrice = styled.span`
  
`

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`


export default Cart