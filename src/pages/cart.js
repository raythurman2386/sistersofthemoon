import React from "react"
import Layout from "../components/layout"
import { CartContext } from '../context/CartContext'
import SEO from "../components/seo"

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
          <div className="container" style={{ minHeight: '75vh' }}>
            <h1>Cart Page</h1>
            <ul>
              {cart.map(item => (
                <li key={item.node.id}>
                  <p>{item.node.product.name}{item.node.nickname && <span> - {item.node.nickname}</span>}</p>
                  <p>${item.node.unit_amount / 100}.00</p>
                  <button onClick={e => removeItem(e, item.node.id)}>X</button>
                </li>
              ))}
            </ul>
            <h5>Subtotal: <span>${cart.reduce((acc, item) => acc += item.node.unit_amount, 0) / 100}.00</span></h5>
            <button onClick={() => placeOrder(cart)}>Place Order</button>
          </div>
        )}
      </CartContext.Consumer>
    </Layout>
  )
}

export default CartPage
