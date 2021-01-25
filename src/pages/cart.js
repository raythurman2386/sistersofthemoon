import React, { useContext } from "react"
import Layout from "../components/layout"
import { CartContext } from "../context/CartContext"
import SEO from "../components/seo"
import styled from "styled-components"
import { ActionButton } from "../components/product"
import { loadStripe } from "@stripe/stripe-js"

let stripePromise
let key = process.env.STRIPE_PRODUCT_KEY
let address = process.env.ADDRESS
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(`${key}`)
  }
  return stripePromise
}

const CartPage = () => {
  const [loading, setLoading] = React.useState(false)
  const { cart, removeItem } = useContext(CartContext)

  const placeOrder = async (e, cart) => {
    e.preventDefault()
    setLoading(true)
    let lineItems = []
    cart.map(item => {
      return lineItems.push({
        price: item.id,
        quantity: item.quantity,
      })
    })

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      lineItems,
      mode: "payment",
      successUrl: `${address}/success`,
      cancelUrl: `${address}/cancel`,
    })

    if (error) {
      console.warn("Error", error)
      setLoading(false)
    }
  }

  return (
    <Layout>
      <SEO title="Cart" />
      <div className="container">
        <h2>My Shopping Cart</h2>
        <ListContainer>
          {cart &&
            cart.map(item => (
              <ListItem key={item.id}>
                <div>
                  {item.quantity}
                  {" - "}${(item.unit_amount * item.quantity) / 100}.00
                </div>
                <div>
                  {item.product.name}
                  {item.nickname && <span> - {item.nickname}</span>}
                </div>
                <ActionButton
                  btnColor="#d9534f"
                  onClick={e => removeItem(e, item.id)}
                >
                  X
                </ActionButton>
              </ListItem>
            ))}
        </ListContainer>
        <ListFooter>
          <Subtotal>
            Subtotal:{" "}
            <span>
              $
              {cart &&
                cart.reduce(
                  (acc, item) => (acc += item.unit_amount * item.quantity),
                  0
                ) / 100}
              .00
            </span>
          </Subtotal>
          <ActionButton onClick={e => placeOrder(e, cart)}>
            {!loading ? "Place Order" : "Loading"}
          </ActionButton>
        </ListFooter>
      </div>
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
  padding: 1rem 0;

  @media (max-width: 768px) {
    div {
      font-size: 1.3rem;
    }
  }
`

export const Subtotal = styled.h5`
  font-size: 1.6rem;
`

export const ListFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
