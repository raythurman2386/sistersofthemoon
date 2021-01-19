import React, { useState } from "react"
import styled from 'styled-components';
import { CartContext } from '../context/CartContext'
import Image from './image';

const Product = ({ product_name, skus }) => {
  const [sku, setSku] = useState(skus[0].node.id)

  return (
    <CartContext.Consumer>
      {({ addItem }) => (
        <Card>
          <header>
            <Image tarot />
            <Title>{product_name}</Title>
            <Description>${skus[0].node.unit_amount / 100}.00</Description>
          </header>
          {skus.length <= 1 ? (<ActionButton onClick={() => addItem({ node: skus[0].node })}>Add To Cart</ActionButton>) : (
            <>
              <select defaultValue={sku} onBlur={e => setSku(e.target.value)}>
                {skus.map(edge => (
                  <option key={edge.node.id} value={edge.node.id}>{edge.node.nickname}</option>
                ))}
              </select>
              <ActionButton onClick={() => addItem(skus.filter(({ node }) => node.id === sku))}>Add To Cart</ActionButton>
            </>
          )}
        </Card>
      )}
    </CartContext.Consumer>
  )
}

export default Product

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