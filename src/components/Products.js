import React from "react"
import { useProductsData } from "../hooks/useProductsData"
import { GridContainer } from "../styles/layout"
import Product from "./product"

const Products = () => {
  const { edges } = useProductsData()

  return (
    <GridContainer>
      {edges.map(product => {
        if (
          product.node.title === "Tarot Reading" ||
          product.node.title === "Rune Reading"
        ) {
          return null
        }

        return <Product key={product.node.id} item={product.node} />
      })}
    </GridContainer>
  )
}

export default Products
