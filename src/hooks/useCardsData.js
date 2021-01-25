import { useStaticQuery, graphql } from "gatsby"

export const useCardsData = () => {
  const { allStripePrice } = useStaticQuery(
    graphql`
      query AllCards {
        allStripePrice(filter: { product: { name: { eq: "Tarot Reading" } } }) {
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
