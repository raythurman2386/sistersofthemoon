import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  ArticleContent,
  ArticleLeft,
  ArticleRight,
  ArticleTop,
  ImageContainer,
} from "../styles/index"
import Image from "../components/image"
// import { useQuotesData } from "../hooks/useQuotesData"

const IndexPage = () => {
  // const { edges } = useQuotesData();
  return (
    <Layout>
      <SEO title="Home" />
      <section className="container">
        <ArticleTop
          data-sal="fade"
          data-sal-duration="500" // changes duration of the animation (from 200 to 2000 ms)
          data-sal-delay="1000" // adds delay to the animation (from 5 to 1000 ms)
          data-sal-easing="ease"
        >
          {/* {edges && edges[0].node ? (
            <h3>
              "{edges[0].node.quote}"
              <span style={{ fontSize: "1.6rem", fontStyle: "none" }}>
                {" "}
                - {edges[0].node.author}
              </span>
            </h3>
          ) : ( */}
              <h3>
              "The space between life and death, that’s where we are the most
              alive."
              <span style={{ fontSize: "1.6rem", fontStyle: "none" }}>
                {" "}
                - Floki
              </span>
            </h3>
          {/* )} */}
        </ArticleTop>

        <ArticleLeft
          data-sal="fade"
          data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
          data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
          data-sal-easing="ease"
        >
          <ImageContainer
            data-sal="slide-right"
            data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
            data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
            data-sal-easing="ease"
          >
            <Image tarot />
          </ImageContainer>
          <ArticleContent
            data-sal="slide-left"
            data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
            data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
            data-sal-easing="ease"
          >
            <h3>Tarot Readings</h3>
            <p>
              A Tarot Card Reading can help guide you through your troubled
              emotions and clouded thoughts, by offering a reflection of your
              past, present and possible future and showing you a fresh
              perspective on your life.
            </p>
          </ArticleContent>
        </ArticleLeft>
        <ArticleRight
          data-sal="fade"
          data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
          data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
          data-sal-easing="ease"
        >
          <ImageContainer
            data-sal="slide-left"
            data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
            data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
            data-sal-easing="ease"
          >
            <Image rune />
          </ImageContainer>
          <ArticleContent
            data-sal="slide-right"
            data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
            data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
            data-sal-easing="ease"
          >
            <h3>Rune Readings</h3>
            <p>
              Runes have been used for centuries for a variety of purposes. As
              well as forming a basic alphabet, each letter or rune has its own
              individual meaning. This combination has created a powerful means
              of written communication - for messages, epitaphs and
              inscriptions.
            </p>
          </ArticleContent>
        </ArticleRight>
        <ArticleLeft
          data-sal="fade"
          data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
          data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
          data-sal-easing="ease"
        >
          <ImageContainer
            data-sal="slide-right"
            data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
            data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
            data-sal-easing="ease"
          >
            <Image candle />
          </ImageContainer>
          <ArticleContent
            data-sal="slide-left"
            data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
            data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
            data-sal-easing="ease"
          >
            <h3>Homemade Candles</h3>
            <p>
              We use the finest scents and ingredients and hand melt, mix, and
              pour each and every candle so you get the best experience
              possible. We use ONLY 100% natural soy wax in our candles, we
              don't blend with any other type of wax!
            </p>
          </ArticleContent>
        </ArticleLeft>
      </section>
    </Layout>
  )
}

export default IndexPage
