import React from "react"
import Client from "shopify-buy"

const client = Client.buildClient({
  domain: "sisters-by-the-moon.myshopify.com",
  storefrontAccessToken: "13a80f9008ebe336a758123c7e23e654",
})

export const StoreContext = React.createContext({
  client,
})

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={{ client }}>{children}</StoreContext.Provider>
  )
}
