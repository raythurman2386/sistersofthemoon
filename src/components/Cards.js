import React from "react"
import styled from "styled-components"
import CardProduct from "./cardProduct"
import { useCardsData } from "../hooks/useCardsData"

const Cards = () => {
  const { edges } = useCardsData()
  return (
    <GridContainer>
      {edges.map(product => (
        <CardProduct key={product.node.id} item={product.node} />
      ))}
    </GridContainer>
  )
}

export default Cards

const GridContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 4vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 5rem;
`
