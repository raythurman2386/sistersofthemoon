import React, { useContext } from "react"
import Layout from "../components/layout"
import { CartContext } from "../context/CartContext"
import SEO from "../components/seo"
import styled from "styled-components"
import { ActionButton } from "../components/product"
import { StoreContext } from "../context/StoreContext"

const CartPage = () => {
  const [paid, setPaid] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const { cart, removeItem, emptyCart } = useContext(CartContext)
  const { client } = useContext(StoreContext)

  const placeOrder = async (e, cart) => {
    const newCheckout = await client.checkout.create()
    setLoading(true)
    let lineItems = []
    cart.map(item => {
      return lineItems.push({
        variantId: item.variants[0].shopifyId,
        quantity: item.quantity,
      })
    })

    const addItems = await client.checkout.addLineItems(newCheckout.id, lineItems)

    if (typeof window !== `undefined`) {
      window.open(addItems.webUrl, "_blank")
      setLoading(false)
      setPaid(true)
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
                  {" - "}${(item.variants[0].price * item.quantity)}
                </div>
                <div>
                  {item.title}
                  {item.title === "Tarot Reading" &&
                    ` | ${item.variants[0].title}`}
                  {item.title === "Rune Reading" &&
                    ` | ${item.variants[0].title}`}
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
                  (acc, item) => (acc += parseInt(item.variants[0].price) * item.quantity),
                  0
                )}
            </span>
          </Subtotal>
          {!paid ? (
            <ActionButton onClick={e => placeOrder(e, cart)}>
              {!loading ? "Place Order" : "Loading"}
            </ActionButton>
          ) : (
              <ActionButton btnColor="#f0ad4e" onClick={e => emptyCart()}>
                Empty Cart
              </ActionButton>
            )}
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
