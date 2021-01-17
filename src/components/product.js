import React, { useState } from "react"
import styled from 'styled-components';

const Product = ({ product_name, skus }) => {
  const [sku, setSku] = useState(skus[0].node.id)
  const stripe = window.Stripe(
    `${process.env.STRIPE_PUBLIC_KEY}`
  )

  const placeOrder = () => {
    stripe.redirectToCheckout({
      lineItems: [
        {
          price: sku,
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "http://localhost:8000/success",
      cancelUrl: "http://localhost:8000/cancel",
    })
  }

  console.log(skus[0].node.unit_amount)

  return (
    <Card>
      <header>
        <CardImg src="https://picsum.photos/250" alt="something"></CardImg>
        <Title>{product_name}</Title>
        <Description>{skus[0].node.unit_amount}</Description>
      </header>
      {skus.length <= 1 ? (null) : (
        <select defaultValue={sku} onBlur={e => setSku(e.target.value)}>
          {skus.map(edge => (
            <option key={edge.node.id} value={edge.node.id}>{edge.node.nickname}</option>
          ))}
        </select>
      )}
      <ActionButton onClick={placeOrder}>Buy Now</ActionButton>
    </Card>
  )
}

export default Product

const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
    transition: all 0.3s;
    width: 250px;
    height: 400px;
    margin: var(--height) var(--margin);
    &:hover {
      box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    }
`

const Title = styled.h2`
  color: #333;
  font-weight: 300;
`

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Description = styled.p`
  color: #fff;
  font-weight: 300;
`

const ActionButton = styled.button`
  padding: 8px 14px;
  background: #333;
  color: #fff;
  cursor: pointer;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`