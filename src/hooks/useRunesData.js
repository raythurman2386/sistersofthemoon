import { useStaticQuery, graphql } from "gatsby"

export const useRunesData = () => {
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query AllRunes {
        allShopifyProduct(filter: {title: {eq: "Rune Reading"}}) {
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
                product {
                  description
                  shopifyId
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
