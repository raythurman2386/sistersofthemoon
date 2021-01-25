import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ rune, tarot, candle }) => {
  const data = useStaticQuery(graphql`
    query {
      runeImage: file(relativePath: { eq: "runes.webp" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tarotImage: file(relativePath: { eq: "tarot.webp" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      candleImage: file(relativePath: { eq: "candle.webp" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (rune) {
    return (
      <Img fluid={data.runeImage.childImageSharp.fluid} alt="rune readings" />
    )
  } else if (tarot) {
    return (
      <Img fluid={data.tarotImage.childImageSharp.fluid} alt="tarot readings" />
    )
  } else if (candle) {
    return (
      <Img
        fluid={data.candleImage.childImageSharp.fluid}
        alt="homemade candles"
      />
    )
  }

  return
  // rune && <Img fluid={data.runeImage.childImageSharp.fluid} />
  // tarot && <Img fluid={data.tarotImage.childImageSharp.fluid} />
  // candle && <Img fluid={data.candleImage.childImageSharp.fluid} />
}

export default Image
