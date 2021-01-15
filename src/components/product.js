import React, { useState } from "react"

const Product = () => {
  const [sku, setSku] = useState("price_1HAo9mKM9H0GScyLnc268dHT")
  const stripe = window.Stripe(
    `${process.env.STRIPE_PRODUCT_KEY}`
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
      <img src="https://picsum.photos/340/400" alt="Tarot Reading" />
      <h3>Tarot Reading</h3>
      <select defaultValue={sku} onBlur={e => setSku(e.target.value)}>
        <option value="price_1HAo9mKM9H0GScyLnc268dHT">Card of the Day</option>
        <option value="price_1HAotbKM9H0GScyLGpxKly2C">3 Card Reading</option>
        <option value="price_1HAotnKM9H0GScyLfR6IKjJv">
          Full Spread Reading
        </option>
        <option value="price_1HAotvKM9H0GScyLTCZVi8qs">Recorded Reading</option>
      </select>
      <button onClick={placeOrder}>Buy Now</button>
    </article>
  )
}

export default Product
