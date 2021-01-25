import React from "react"
import { useProductsData } from "../hooks/useProductsData"
import styled from "styled-components"
import Product from "./product"

const Products = () => {
  const { edges } = useProductsData()

  return (
    <GridContainer>
      {edges.map(product => {
        if (
          product.node.product.name === "Tarot Reading" ||
          product.node.product.name === "Rune Reading"
        ) {
          return
        }
        return <Product key={product.node.id} item={product.node} />
      })}
    </GridContainer>
  )
}

export default Products

const GridContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 4vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 5rem;
`
