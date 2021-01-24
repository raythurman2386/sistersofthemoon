import { useStaticQuery, graphql } from "gatsby"

export const useRunesData = () => {
  const { allStripePrice } = useStaticQuery(
    graphql`
      query AllRunes {
  allStripePrice(filter: {product: {name: {eq: "Rune Reading"}}}) {
    edges {
      node {
        id
        nickname
        unit_amount
        product {
          id
          name
        }
      }
    }
  }
}
    `
  )
  return allStripePrice
}