import { useStaticQuery, graphql } from "gatsby"

export const useQuotesData = () => {
  const { allStrapiQuotes } = useStaticQuery(
    graphql`
      query AllQuotes {
  allStrapiQuotes(sort: {fields: id, order: DESC}) {
    edges {
      node {
        author
        id
        quote
      }
    }
  }
}

    `
  )
  return allStrapiQuotes 
}
