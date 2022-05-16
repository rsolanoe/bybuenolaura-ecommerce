import React from 'react'
import styled from 'styled-components'
import {ArrowDownward, ArrowUpward} from "@mui/icons-material";



const FeaturedInfo = () => {
    return (
        <Featured>
            <FeaturedItem>
                <FeaturedTitle>Revenue</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>$2,415</FeaturedMoney>
                    <FeaturedMoneyRate>
                        -11.4 <ArrowDown/> 
                    </FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compared to last month</FeaturedSub>
            </FeaturedItem>

            <FeaturedItem>
                <FeaturedTitle>Sales</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>$4,415</FeaturedMoney>
                    <FeaturedMoneyRate>
                        2.4 <ArrowUp /> 
                    </FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compared to last month</FeaturedSub>
            </FeaturedItem>

            <FeaturedItem>
                <FeaturedTitle>Cost</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>$2,653</FeaturedMoney>
                    <FeaturedMoneyRate>
                        8.4 <ArrowUp /> 
                    </FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compared to last month</FeaturedSub>
            </FeaturedItem>
        </Featured>
    )
}

const Featured = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

const FeaturedItem = styled.div`
    flex: 1;
    margin: 0 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
`

const FeaturedTitle = styled.span`
    font-size: 20px;
`

const FeaturedMoneyContainer = styled.div`
    margin: 10px 0;
    display: flex;
    align-items: center;
    gap: 15px;
`

const FeaturedMoney = styled.span`
    font-size: 30px;
    font-weight: bold;
`

const FeaturedMoneyRate = styled.span`
    display: flex;
    align-items: center;

    svg {
        font-size: 14px;
        margin-left: 5px;
    }
`

const FeaturedSub = styled.span`
    font-size: 15px;
    color: gray;
`

const ArrowUp = styled(ArrowUpward)`
    color: green
`

const ArrowDown = styled(ArrowDownward)`
    color: red
`



export default FeaturedInfo