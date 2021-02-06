import styled from "styled-components"

const GridContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 4vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 5rem;
`

export { GridContainer }
