import styled from "styled-components"
import { categories } from "../data"
import { mobile } from "../responsive"
import CategoryItem from "./CategoryItem"


const Categories = () => {
    return (
        <Container className="categories">
            {
                categories.map(item => (
                    <CategoryItem key={item.id} item={item} />
                ))
            }
        </Container>
    )
}


const Container = styled.section`
    display: flex;
    padding: 20px 80px;
    justify-content: space-between;

    ${mobile({padding: '0', flexDirection: 'column'})}

  
`

export default Categories