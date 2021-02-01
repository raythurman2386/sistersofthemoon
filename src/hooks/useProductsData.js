import { useStaticQuery, graphql } from "gatsby"

export const useProductsData = () => {
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query AllProducts {
        allShopifyProduct {
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
              }
              images {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 275) {
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
