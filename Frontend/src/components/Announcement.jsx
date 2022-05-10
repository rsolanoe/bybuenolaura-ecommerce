import { useState } from "react";
import styled from "styled-components";

const Announcement = () => {
   const [show, setShow] = useState(true);

   const handleClick = () => {
      setShow(false);
   };

   return (
      <>
        
            <Container className={show ? 'active' : 'hide'}>
               <p>Super Deal! Free Shiping on Orders Over $50</p>
               <span className="close" onClick={handleClick}>
                  x
               </span>
            </Container>
         
      </>
   );
};

const Container = styled.div`
  height: 28px;
  position: relative;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.3s ease;

  &.hide{
     height: 0px;
  }

  .close {
    position: absolute;
    right: 40px;
    cursor: pointer;
  }
`;

export default Announcement;
