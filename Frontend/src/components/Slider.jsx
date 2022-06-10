import styled from "styled-components";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const bannerImages = require.context('../images', true)

const Slider = () => {
   const [slideIndex, setSlideIndex] = useState(0);

   const handleClick = (direction) => { 
      if(direction === 'left'){
         setSlideIndex(slideIndex > 0 ? slideIndex-1 : sliderItems.length-1)
      } else {
         setSlideIndex(slideIndex < sliderItems.length-1 ? slideIndex+1 : 0)
      }
   };

   return (
      <Container className="banners">
         <Arrow direction="left" onClick={() => handleClick("left")}>
            <MdOutlineKeyboardArrowLeft /> {/* Arrow pointing to the left */}
         </Arrow>
         <Arrow direction="right" onClick={() => handleClick("right")}>
            <MdOutlineKeyboardArrowRight /> {/* Arrow pointing to the right */}
         </Arrow>
         <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item, i) => (
               <Slide bg={item.bg} key={item.id} >
                  <ImgContainer>
                     <img src={bannerImages(`./banner${i+1}.png`)} alt="first banner" />
                  </ImgContainer>
                  <InfoContainer>
                     <Title>{item.title}</Title>
                     <Desc>
                        {item.desc}
                     </Desc>
                     <Button>SHOP NOW</Button>
                  </InfoContainer>
               </Slide>
            ))}
         </Wrapper>
         
      </Container>
   );
};

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #${({ bg }) => bg};

  ${mobile({ flexDirection: 'column', height: '100%'})}
`;

const ImgContainer = styled.div`
  height: 80%;
  flex: 1;
  position: relative;
  

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;

    ${mobile({ width: 'auto' })}
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  box-sizing: border-box;
  padding: 50px;

  ${mobile({ padding: '25px' })}
`;

const Title = styled.h1`
  font-size: 70px;

  ${mobile({ fontSize: '28px' })}
`;

const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;

  ${mobile({ fontSize: '15px', margin: '10px 0' })}
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;

  &:hover{
     background-color: red;
  }

  ${mobile({ fontSize: '13px' })}
`;

const Wrapper = styled.div`
  height: 100%;
  background-color: lightblue;
  display: flex;
  transform: translateX( ${({slideIndex}) => slideIndex * -100}vw);
  transition: all 1s ease;

`;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  overflow: hidden;

  ${mobile({height: '73vh'})}

`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ddd0d0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: ${({ direction }) => direction === "left" ? 50 : 50};
  left: ${({ direction }) => direction === "left" && "10px"};
  right: ${({ direction }) => direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
`;

export default Slider;
