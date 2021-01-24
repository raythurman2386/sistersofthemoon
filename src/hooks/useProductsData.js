import { useStaticQuery, graphql } from "gatsby"

export const useProductsData = () => {
  const { allStripePrice } = useStaticQuery(
    graphql`
      query AllProducts {
        allStripePrice {
          edges {
            node {
              id
              nickname
              product {
                id
                name
              }
              unit_amount
            }
          }
        }
      }
    `
  )
  return allStripePrice
}