import React, { useContext } from "react"
import { Card, NewImg, Title, Description, ActionButton } from "../styles/card"
import { CartContext } from "../context/CartContext"

const Product = ({ item }) => {
  const { addItem } = useContext(CartContext)

  return (
    <Card>
      <NewImg fluid={item.images[0].localFile.childImageSharp.fluid} />
      <Title>{item.title}</Title>
      <Description>{item.description}</Description>
      {item.availableForSale ? (
        <Description>${item.variants[0].price}</Description>
      ) : (
          <Description>Currently Out of Stock</Description>
        )}
      <ActionButton onClick={e => addItem(e, { ...item, quantity: 1 })}>
        Add To Cart
      </ActionButton>
    </Card>
  )
}

export default Product
