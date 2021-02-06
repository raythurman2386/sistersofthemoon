import styled from "styled-components"

const ArticleTop = styled.div`
  margin: var(--height) 0;
  padding: 0 2.5rem;
  line-height: 1.75;
  text-align: center;
`

const ArticleLeft = styled.article`
  margin: var(--height) 0;
  display: flex;
  align-items: center;
  padding: 2.5rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ArticleRight = styled.article`
  margin: var(--height) 0;
  display: flex;
  flex-direction: row-reverse;
  padding: 2.5rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ArticleContent = styled.div`
  flex: 1;
  padding: 0 2.5rem;
  line-height: 1.75;
  text-align: center;
`

const ImageContainer = styled.div`
  width: 50%;
  flex: 1;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export { ArticleContent, ArticleLeft, ArticleRight, ArticleTop, ImageContainer }
