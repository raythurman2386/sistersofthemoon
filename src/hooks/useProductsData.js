import { useStaticQuery, graphql } from "gatsby"

export const useProductsData = () => {
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query AllProducts {
        allShopifyProduct {
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
                shopifyId
                price
                title
                requiresShipping
              }
              images {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 200) {
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
