import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

import Runes from '../images/runes.jpeg';
import Tarot from '../images/tarot.jpeg';
import Candle from '../images/candle.jpeg';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="container home-content">
        <ArticleTop>
          <h3>Something</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum leo feugiat vulputate accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed lorem dui, ultricies euismod arcu sed, tincidunt condimentum lorem. Duis faucibus, felis sed semper aliquam, enim lectus vulputate nisl, eget rhoncus tellus dolor a lectus.</p>
        </ArticleTop>
        <ArticleLeft>
          <ImageContainer>
            <Image src={Tarot} alt="Tarot Readings" />
          </ImageContainer>
          <ArticleContent>
            <h3>Tarot Readings</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum leo feugiat vulputate accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed lorem dui, ultricies euismod arcu sed, tincidunt condimentum lorem. Duis faucibus, felis sed semper aliquam, enim lectus vulputate nisl, eget rhoncus tellus dolor a lectus.</p>
          </ArticleContent>
        </ArticleLeft>
        <ArticleRight>
          <ImageContainer>
            <Image src={Runes} alt="Rune Readings" />
          </ImageContainer>
          <ArticleContent>
            <h3>Rune Readings</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum leo feugiat vulputate accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed lorem dui, ultricies euismod arcu sed, tincidunt condimentum lorem. Duis faucibus, felis sed semper aliquam, enim lectus vulputate nisl, eget rhoncus tellus dolor a lectus.</p>
          </ArticleContent>
        </ArticleRight>
        <ArticleLeft>
          <ImageContainer>
            <Image src={Candle} alt="Homemade Candles" />
          </ImageContainer>
          <ArticleContent>
            <h3>Homemade Candles</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum leo feugiat vulputate accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed lorem dui, ultricies euismod arcu sed, tincidunt condimentum lorem. Duis faucibus, felis sed semper aliquam, enim lectus vulputate nisl, eget rhoncus tellus dolor a lectus.</p>
          </ArticleContent>
        </ArticleLeft>
      </section>
    </Layout>
  )
}

export default IndexPage

const ArticleTop = styled.div`
margin: var(--height) 0;
padding: 0 2.5rem;
line-height: 1.75;
`;

const ArticleLeft = styled.article`
margin: var(--height) 0;
display: flex;
align-items: center;
padding: 2.5rem 0;
`;

const ArticleRight = styled.article`
margin: var(--height) 0;
display: flex;
flex-direction: row-reverse;
padding: 2.5rem 0;
`;

const ArticleContent = styled.div`
flex: 1;
padding: 0 2.5rem;
line-height: 1.75;
text-align: center;
`;

const ImageContainer = styled.div`
width: 50%;
flex: 1;
`;

const Image = styled.img`
width: 100%;
height: 30rem;
`