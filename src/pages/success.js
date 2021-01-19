import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CartContext } from "../context/CartContext"
import { ListContainer, ListFooter, ListItem, Subtotal } from './cart'
import { ActionButton } from '../components/product'

const Success = () => (
  <CartContext.Consumer>
    {({ emptyCart, cart }) => {
      return (
        <Layout>
          <SEO title="Payment Complete" />
          <div className="container">
            <h2>Payment Success</h2>
            <p>
              Thank you so much for your support and business. You should have received a receipt in your email.
              We are working hard to fulfill your order and you should recieve a shipping confirmation once your items have been shipped.
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
              <Subtotal>Total: <span>${cart.reduce((acc, item) => acc += item.node.unit_amount, 0) / 100}.00</span></Subtotal>
              <ActionButton onClick={() => emptyCart()}>Clear Cart</ActionButton>
            </ListFooter>
          </div>
        </Layout >
      )
    }}
  </CartContext.Consumer>
)

export default Success
