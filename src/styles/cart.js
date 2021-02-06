import styled from "styled-components"

export const ListContainer = styled.ul`
  list-style: none;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;

  @media (max-width: 768px) {
    div {
      font-size: 1.3rem;
    }
  }
`

export const Subtotal = styled.h5`
  font-size: 1.6rem;
`

export const ListFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ActionLink = styled.a`
  display: inline-block;
  text-decoration: none;
  margin: 5px 5px 5px 5px;
  padding: 1px 5px;
  text-align: right;
  background: ${props => props.btnColor || "#5cb85c"};
  color: #fff;
  border-radius: var(--radius);
  :hover {
    opacity: 0.8;
  }
`

export const CartButton = styled.button`
  padding: 1px 10px;
  background-color: ${props => props.btnColor || "#5cb85c"};
  border-radius: var(--radius);
`
