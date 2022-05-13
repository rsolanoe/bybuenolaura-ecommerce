import styled from "styled-components";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { addProduct } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductInfo = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [amount, setAmount] = useState(1);

    const dispatch = useDispatch();

    console.log(product);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios(
                    `http://localhost:5000/api/products/find/${id}`
                );
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);

    const handleClick = () => {
        toast.success(`${product.title} se ha agregado`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        dispatch(
            addProduct({ ...product, quantity: amount })
        );
    };

    return (
        <Container>
            <Wrapper>
                <ImgContainer>
                    <img src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc
                        dangerouslySetInnerHTML={{
                            __html: product.description,
                        }}
                    ></Desc>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                        {/*                <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color?.map((item) => (
                                <FilterColor key={item} color={item} />
                            ))}
                        </Filter> */}
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                {product.size?.map((item) => (
                                    <FilterSizeOption key={item}>
                                        {item}
                                    </FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <IoRemoveSharp
                                onClick={() =>
                                    amount > 1 &&
                                    setAmount((preValue) => preValue - 1)
                                }
                            />
                            <Amount>{amount}</Amount>
                            <IoAddSharp
                                onClick={() =>
                                    setAmount((preValue) => preValue + 1)
                                }
                            />
                        </AmountContainer>

                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <ToastContainer />
        </Container>
    );
};

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
        object-fit: contain;
    }
`;

const InfoContainer = styled.div`
    flex: 1;
`;

const Title = styled.h1`
    font-weight: 600;
    font-size: 1.7rem;
`;

const Desc = styled.div`
    margin: 20px 0;
    font-size: 1.2rem;

    h5 {
        font-size: 1.4rem;
        margin-bottom: 1rem;
    }

    li {
        font-size: 1rem;
        margin-bottom: 0.2rem;
        list-style: none;
    }
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 2rem;
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

    svg {
        cursor: pointer;
    }
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

    &:hover {
        background-color: teal;
        color: white;
    }
`;

export default ProductInfo;
