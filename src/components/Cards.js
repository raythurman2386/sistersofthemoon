import React from 'react'
import styled from 'styled-components'
import Product from './product';

const items = [{ id: 1, name: "3 Card Reading", price: 500 }, { id: 2, name: "5 Card Reading", price: 1000 }, { id: 3, name: "Full Spread Reading", price: 1500 }, { id: 4, name: "Recorded Reading", price: 2500 }]

const Cards = () => {
  return (
    // TEMPORARY CHANGES MARKED TO COME FOR THIS PAGE
    // TODO: Style store and products
    // Change to CSS Grid for the store layout
    <GridContainer>
      {items.map(item => <Product key={item.id} skus={[]} product_name={item.name} price={item.price} />)}
    </GridContainer>
  )
}

export default Cards

const GridContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 4vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5rem;
`;