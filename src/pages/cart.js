import React, { useEffect, useContext } from "react"
import Layout from "../components/layout"
import { CartContext } from "../context/CartContext"
import SEO from "../components/seo"
import {
  ListContainer,
  ListItem,
  ListFooter,
  Subtotal,
  ActionLink,
  CartButton,
} from "../styles/cart"
import { StoreContext } from "../context/StoreContext"

const CartPage = () => {
  const [url, setUrl] = React.useState("")
  const [loading, setLoading] = React.useState(true)
  const { cart, removeItem, emptyCart } = useContext(CartContext)
  const { client } = useContext(StoreContext)

  useEffect(() => {
    const placeOrder = async () => {
      const newCheckout = await client.checkout.create()
      setLoading(true)
      let lineItems = []
      cart.map(item =>
        lineItems.push({
          variantId: item.variants[0].shopifyId,
          quantity: item.quantity,
        })
      )

      const addItems = await client.checkout.addLineItems(
        newCheckout.id,
        lineItems
      )
      setUrl(addItems.webUrl)
      setLoading(false)
    }

    placeOrder()
  }, [cart])

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
                  {" - "}${item.variants[0].price * item.quantity}
                </div>
                <div>
                  {item.title}
                  {item.title === "Tarot Reading" &&
                    ` | ${item.variants[0].title}`}
                  {item.title === "Rune Reading" &&
                    ` | ${item.variants[0].title}`}
                </div>
                <CartButton
                  btnColor="#d9534f"
                  onClick={e => removeItem(e, item.id)}
                >
                  X
                </CartButton>
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
                  (acc, item) =>
                    (acc += parseInt(item.variants[0].price) * item.quantity),
                  0
                )}
            </span>
          </Subtotal>
          <div>
            <CartButton btnColor="#f0ad4e" onClick={e => emptyCart()}>
              Empty Cart
            </CartButton>
            <ActionLink href={url} target="_blank" rel="noopener noreferrer">
              {!loading ? "Place Order" : "Loading"}
            </ActionLink>
          </div>
        </ListFooter>
      </div>
    </Layout>
  )
}

export default CartPage
