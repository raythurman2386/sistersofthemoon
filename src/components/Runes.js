import React from "react"
import styled from "styled-components"
import CardProduct from "./cardProduct"
import { useRunesData } from "../hooks/useRunesData"

const Runes = () => {
  const { edges } = useRunesData()
  return (
    // TEMPORARY CHANGES MARKED TO COME FOR THIS PAGE
    // TODO: Style store and products
    // Change to CSS Grid for the store layout
    <GridContainer>
      {edges.map(product => {
        return (
          product.node.variants.map(variant => (
            <CardProduct key={variant.id} item={variant} product={product.node} />
          ))
        )
      })}
    </GridContainer>
  )
}

export default Runes

const GridContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 4vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 5rem;
`
