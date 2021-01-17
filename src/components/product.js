import React, { useState } from "react"

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

  return (
    <article>
      <img src="https://picsum.photos/200" alt="Tarot Reading" />
      <h3>{product_name}</h3>
      {skus.length <= 1 ? (null) : (
        <select defaultValue={sku} onBlur={e => setSku(e.target.value)}>
          {skus.map(edge => (
            <option key={edge.node.id} value={edge.node.id}>{edge.node.nickname}</option>
          ))}
        </select>
      )}
      <button onClick={placeOrder}>Buy Now</button>
    </article>
  )
}

export default Product
