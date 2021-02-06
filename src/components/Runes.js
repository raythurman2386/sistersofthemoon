import React from "react"
import { GridContainer } from "../styles/layout"
import CardProduct from "./cardProduct"
import { useRunesData } from "../hooks/useRunesData"

const Runes = () => {
  const { edges } = useRunesData()
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

export default Runes
