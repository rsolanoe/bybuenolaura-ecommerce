import styled from "styled-components"
import { mobile } from "../responsive"

const CategoryItem = ({item}) => {
    return (
        <Container>
            <img src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </Info>
        </Container>
    )
}

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        ${mobile({height: '30vh'})}
    }
`

const Info = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    margin: auto;
    width: 100%;
`

const Title = styled.h1`
    color: white;
    margin-bottom: 5px;
`

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    border-radius: 3px;
    cursor: pointer;
    font-weight: 700;
`

export default CategoryItem