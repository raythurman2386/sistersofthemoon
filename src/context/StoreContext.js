import React from "react"
import Client from "shopify-buy"

const client = Client.buildClient({
  domain: "sisters-by-the-moon.myshopify.com",
  storefrontAccessToken: `${process.env.SHOPIFY_STOREFRONT_KEY}`,
})

export const StoreContext = React.createContext({
  client,
})

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={{ client }}>{children}</StoreContext.Provider>
  )
}
