import React from "react"
import { GridContainer } from "../styles/layout"
import CardProduct from "./cardProduct"
import { useCardsData } from "../hooks/useCardsData"

const Cards = () => {
  const { edges } = useCardsData()

  return (
    <GridContainer>
      {edges.map(product => {
        return product.node.variants.map(variant => (
          <CardProduct key={variant.id} item={variant} product={product.node} />
        ))
      })}
    </GridContainer>
  )
}

export default Cards
