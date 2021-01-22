import React from 'react'
import styled from 'styled-components'
import Product from './product';


const items = [{ id: 1, name: "3 Card Reading" }, { id: 2, name: "5 Card Reading" }, { id: 3, name: "Full Spread Reading" }, { id: 4, name: "Recorded Reading" }]

const Runes = () => {
  return (
    // TEMPORARY CHANGES MARKED TO COME FOR THIS PAGE
    // TODO: Style store and products
    // Change to CSS Grid for the store layout
    <GridContainer>
      {items.map(item => <Product key={item.id} skus={[]} product_name={item.name} />)}
    </GridContainer>
  )
}

export default Runes

const GridContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 4vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 5rem;
`;