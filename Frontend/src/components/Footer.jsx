import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import styled from "styled-components"
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";







const Footer = () => {
   return (
      <Container>
         <Left>
            <Logo>byBuenoLaura</Logo>
            <Desc>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptate unde possimus adipisci, laudantium, ipsum officiis nam laborum quas nisi, facilis voluptatem cumque? Assumenda velit fugit eveniet doloribus sint nisi.
            </Desc>
            <SocialContainer>
               <SocialIcon color='3B5999'>
                  <FaFacebookSquare />
               </SocialIcon>
               <SocialIcon color='E4405F'>
                  <FaInstagram />
               </SocialIcon>
               <SocialIcon color='55ACEE'>
                  <FaTwitter />
               </SocialIcon>
               <SocialIcon color='0a66c2'>
                  <FaLinkedin />
               </SocialIcon>
            </SocialContainer>
         </Left>
         <Center>
            <Title>Useful Links</Title>
            <List>
               <ListItem>Home</ListItem>
               <ListItem>Cart</ListItem>
               <ListItem>Man Fashion</ListItem>
               <ListItem>Woman Fashion</ListItem>
               <ListItem>Accesories</ListItem>
               <ListItem>My Account</ListItem>
               <ListItem>Order Tracking</ListItem>
               <ListItem>Wishlist</ListItem>
               <ListItem>Terms</ListItem>
            </List>
         </Center>
         <Right>
            <Title>Contact</Title>
            <ContactItem>
               <FaMapMarkerAlt /> 9700 NW 112h Ave, Miami, FL 33178
            </ContactItem>
            <ContactItem>
               <FaPhoneAlt /> +573008602885
            </ContactItem>
            <ContactItem>
               < MdOutlineMail /> contact@bybuenolaura.com.co
            </ContactItem>
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment methos" />
         </Right>
      </Container>
   )
}

const Container = styled.footer`
    display: flex;

    @media screen and (max-width: 480px) {

   flex-direction: column;
  }

    
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
`

const Logo = styled.h1`
    
`
const Desc = styled.p`
    
`
const SocialContainer = styled.div`
    display: flex;
    font-size: 25px;
    gap: 20px;
    
`
const SocialIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${({ color }) => color};

`

const Center = styled.div`
    flex: 1;
    padding: 20px;

    @media screen and (max-width: 480px) {
 
    display: none;
  }

`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center;
   gap: 8px;
`


export default Footer