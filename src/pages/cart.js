import React from "react"
import Layout from "../components/layout"
import { CartContext } from '../context/CartContext'
import SEO from "../components/seo"
import styled from 'styled-components'
import { ActionButton } from '../components/product';

const CartPage = () => {
  const stripe = window.Stripe(
    `${process.env.STRIPE_PUBLIC_KEY}`
  )

  const placeOrder = (cart) => {
    let lineItems = []
    cart.map(item => (
      lineItems.push({
        price: item.node.id,
        quantity: 1
      })
    ))
    stripe.redirectToCheckout({
      lineItems,
      mode: "payment",
      successUrl: "http://localhost:8000/success",
      cancelUrl: "http://localhost:8000/cancel",
    })
  }

  return (
    <Layout>
      <SEO title="Cart" />
      <CartContext.Consumer>
        {({ cart, removeItem }) => (
          <div className="container">
            <h2>My Shopping Cart</h2>
            <ListContainer>
              {cart.map(item => (
                <ListItem key={item.node.id}>
                  <p>${item.node.unit_amount / 100}.00</p>
                  <p>{item.node.product.name}{item.node.nickname && <span> - {item.node.nickname}</span>}</p>
                  <ActionButton btnColor="#d9534f" onClick={e => removeItem(e, item.node.id)}>X</ActionButton>
                </ListItem>
              ))}
            </ListContainer>
            <ListFooter>
              <Subtotal>Subtotal: <span>${cart.reduce((acc, item) => acc += item.node.unit_amount, 0) / 100}.00</span></Subtotal>
              <ActionButton onClick={() => placeOrder(cart)}>Place Order</ActionButton>
            </ListFooter>
          </div>
        )}
      </CartContext.Consumer>
    </Layout>
  )
}

export default CartPage

export const ListContainer = styled.ul`
list-style: none;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Subtotal = styled.h5`
  font-size: 1.6rem;
`

export const ListFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`