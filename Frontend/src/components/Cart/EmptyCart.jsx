import React from 'react'
import styled from 'styled-components'

const EmptyCart = () => {
    return (
        <Container>
            <p>No tienes producto en tu carrito...</p>
            <p>Seguir comprando</p>

        </Container>
    )
}

const Container = styled.div`
    margin-top: 2.3rem;
    text-align: center;

    p:first-child {
        font-size: 1.2rem;
        color: gray;
    }

`

export default EmptyCart