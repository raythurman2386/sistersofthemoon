import styled from "styled-components"
import Img from "gatsby-image"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: white;
  margin: 15px auto;
  box-sizing: border-box;
  float: left;
  text-align: center;
  border-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-top: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 0.4s;
  &:hover {
    box-shadow: 0 8px 17px 0 rgba(155, 155, 155, 0.2),
      0 6px 20px 0 rgba(155, 155, 155, 0.19);
    transition: 0.3s;
  }
`

const NewImg = styled(Img)`
  width: 200px;
  height: 200px;
  text-align: center;
  margin: 0 auto;
  display: block;
`

const Title = styled.h3`
  font-size: 26px;
  text-align: center;
  color: #222f3e;
  margin: 0;
`

const Description = styled.p`
  text-align: center;
  color: #b2bec3;
  padding: 0 8px;
`

const ActionButton = styled.button`
  text-align: center;
  font-size: 24px;
  color: #fff;
  width: 100%;
  padding: 15px;
  border: 0px;
  outline: none;
  cursor: pointer;
  margin-top: 5px;
  background-color: #3b3e6e;
  background-color: ${props => props.disabled && "#333"};
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  :hover {
    opacity: 0.9;
  }
`

export { Card, NewImg, Title, Description, ActionButton }
