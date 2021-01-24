import React, { useContext } from "react"
import styled from 'styled-components';
import { Link } from 'gatsby'
import { CartContext } from '../context/CartContext'
import Image from './image';

const CardProduct = ({ item }) => {
  const { addItem } = useContext(CartContext)
  return (
    <Card>
      <header>
        <Image tarot />
        <Title>{item.nickname}</Title>
        <Description>${item.unit_amount / 100}.00</Description>
      </header>
      <ActionButton onClick={(e) => addItem(e, { ...item, quantity: 1 })}>Add To Cart</ActionButton>
    </Card>
  )
}

export default CardProduct

const Card = styled.div`
    background: #fff;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
    transition: all 0.3s;
    width: 100%;
    border-radius: var(--radius);
    &:hover {
      box-shadow: 0 8px 17px 0 rgba(155,155,155,0.2),0 6px 20px 0 rgba(155,155,155,0.19);
    }
`

const Title = styled.h3`
  color: #333;
  margin: 0.75rem 0rem 0rem 0rem;
  padding: 0 1rem;
`

const Description = styled.p`
  font-size: 1.5rem;
  display: block;
  display: -webkit-box;
  margin: 0.5rem 0;
  padding: 0 1rem;
  max-width: 100%;
  color: #333;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ActionButton = styled.button`
  display: inline-block;
  margin: 5px 5px 5px 5px;
  text-align: right;
  background: ${props => props.btnColor || '#5cb85c'};
  color: #fff;
  border-radius: var(--radius);
  :hover {
    opacity: 0.8;
  }
`

export const LinkButton = styled(Link)`
  display: inline-block;
  margin: 5px 5px 5px 5px;
  padding: 0 8px;
  text-align: right;
  background: ${props => props.btnColor || '#5cb85c'};
  color: #fff;
  border-radius: var(--radius);
  cursor: pointer;
  :hover {
    opacity: 0.8;
    text-decoration: none;
  }
`