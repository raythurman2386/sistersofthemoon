import React, { useContext } from "react"
import { Card, NewImg, Title, Description, ActionButton } from "../styles/card"
import { CartContext } from "../context/CartContext"
import Img from "gatsby-image"

const CardProduct = ({ item, product }) => {
  const { addItem } = useContext(CartContext)
  return (
    <Card className="flip-right">
      <NewImg fluid={product.images[0].localFile.childImageSharp.fluid} />
      <Title>{item.title}</Title>
      <Description>${item.price}</Description>
      <ActionButton
        onClick={e => addItem(e, { ...product, variants: [item], quantity: 1 })}
      >
        Add To Cart
      </ActionButton>
    </Card>
  )
}

export default CardProduct
