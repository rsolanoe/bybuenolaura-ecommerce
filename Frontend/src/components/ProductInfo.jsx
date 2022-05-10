import styled from "styled-components";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";

const ProductInfo = () => {
    return (
        <Container>
            <Wrapper>
                <ImgContainer>
                    <img src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Blue Denin Jean</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
                        dolorem dignissimos nulla officia recusandae amet laudantium numquam
                        sit voluptatem voluptate. Aut obcaecati nesciunt repellendus,
                        possimus non porro ullam sint, aliquam asperiores ad minus quidem
                        hic? Laborum, fugit quae? Deserunt.
                    </Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <IoRemoveSharp />
                            <Amount>1</Amount>
                            <IoAddSharp />
                        </AmountContainer>

                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
    );
}


const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;

const ImgContainer = styled.div`
  flex: 1;
  padding: 0 50px;

  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-style: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
   display: flex;
   align-items: center;
   width: 50%;
   justify-content: space-between;

`;

const AmountContainer = styled.div`
   display: flex;
   align-items: center;
   font-weight: 700;
   font-size: 23px;
`;

const Amount = styled.span`
   width: 38px;
   height: 38px;
   border-radius: 10px;
   border: 1px solid teal;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0 8px;
`;

const Button = styled.button`
   padding: 20px;
   border: 1px solid teal;
   background-color: white;
   cursor: pointer;
   font-weight: 600;
   border-radius: 5px;
   transition: all 0.1s ease-in-out;

   &:hover{
      background-color: teal;
      color: white;
   }
`;

export default ProductInfo