import React, { useContext } from "react"
import styled from "styled-components"
import { CartContext } from "../context/CartContext"
import Image from "./image"

const CardProduct = ({ item }) => {
  const { addItem } = useContext(CartContext)
  return (
    <Card className="flip-right">
      <div className="card">
        <div className="front">
          <header>
            {item.product.name === "Tarot Reading" ? (
              <Image tarot />
            ) : (
              <Image rune />
            )}
            <Title>{item.nickname}</Title>
            <Description>${item.unit_amount / 100}.00</Description>
          </header>
        </div>
        <div className="back">
          <Title>{item.nickname}</Title>
          Description goes here
          <ActionButton onClick={e => addItem(e, { ...item, quantity: 1 })}>
            Add To Cart
          </ActionButton>
        </div>
      </div>
    </Card>
  )
}

export default CardProduct

const Card = styled.div`
  background: #fff;
  min-height: 380px;
  width: 100%;
  border-radius: var(--radius);
  perspective: 1000px;

  .card {
    .front,
    .back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      backface-visibility: hidden;
    }

    .front {
      z-index: 2;
      opacity: 1;
    }

    .back {
      opacity: 0;
      color: #333;
      padding: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }

  &.flip-right {
    .card {
      .back {
        opacity: 1;
        transition: 0.3s;
      }
    }
  }

  &:hover {
    .front {
      opacity: 0;
      transition: 0.3s;
      z-index: 0;
    }
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
  background: ${props => props.btnColor || "#5cb85c"};
  color: #fff;
  border-radius: var(--radius);
  :hover {
    opacity: 0.8;
  }
`
