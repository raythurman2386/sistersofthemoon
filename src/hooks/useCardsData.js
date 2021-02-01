import { useStaticQuery, graphql } from "gatsby"

export const useCardsData = () => {
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query AllCards {
        allShopifyProduct(filter: {title: {eq: "Tarot Reading"}}) {
          edges {
            node {
              id
              title
              description
              handle
              productType
              availableForSale
              variants {
                price
                title
                requiresShipping
                id
                sku
              }
              images {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return allShopifyProduct
}
