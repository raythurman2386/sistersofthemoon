import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CartContext } from "../context/CartContext"
import { ListContainer, ListFooter, ListItem, Subtotal } from './cart'
import { ActionButton } from '../components/product'

const Cancel = () => (
  <CartContext.Consumer>
    {({ emptyCart, cart }) => (
      <Layout>
        <SEO title="Payment Canceled" />
        <div className="container">
          <h2>Payment Canceled</h2>
          <p>
            Your order has been successfully canceled. We have kept your items in your shopping cart should your change your mind.
            Thank you for looking and we hope you come back again soon.
          </p>
          <ListContainer>
            {cart.map(item => (
              <ListItem key={item.node.id}>
                <p>${item.node.unit_amount / 100}.00</p>
                <p>{item.node.product.name}{item.node.nickname && <span> - {item.node.nickname}</span>}</p>
                <ActionButton btnColor="#d9534f" disabled>X</ActionButton>
              </ListItem>
            ))}
          </ListContainer>
          <ListFooter>
            <Subtotal>Subtotal: <span>${cart.reduce((acc, item) => acc += item.node.unit_amount, 0) / 100}.00</span></Subtotal>
            <ActionButton onClick={() => emptyCart()}>Clear Cart</ActionButton>
          </ListFooter>
        </div>
      </Layout>
    )}
  </CartContext.Consumer>
)

export default Cancel
