import { useStaticQuery, graphql } from "gatsby"

export const useCardsData = () => {
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query AllCards {
        allShopifyProduct(filter: { title: { eq: "Tarot Reading" } }) {
          edges {
            node {
              id
              shopifyId
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
                shopifyId
                sku
                image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
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
