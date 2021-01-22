import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Product from './product';

const PRODUCTS_QUERY = graphql`
  query AllProducts {
    allStripePrice {
      edges {
        node {
          id
          nickname
          product {
            id
            name
          }
          unit_amount
        }
      }
    }
    allStripeProduct {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

const Products = () => {
  return (
    // TEMPORARY CHANGES MARKED TO COME FOR THIS PAGE
    // TODO: Style store and products
    // Change to CSS Grid for the store layout
    <GridContainer>
      <StaticQuery query={PRODUCTS_QUERY}
        render={
          ({ allStripePrice }) => {
            return allStripePrice.edges.map(product => {
              // Get all Skus that match a specific product for the drop down
              // In case one product has multiple sizes/prices
              // const skus = allStripePrice.edges.filter(sku => sku.node.product.id === product.node.id)
              return (
                <Product key={product.node.id} skus={product.node.id} product_name={product.node.product.name} price={product.node.unit_amount} />
              )
            })
          }
        }
      />
    </GridContainer>
  )
}

export default Products

const GridContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 4vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 5rem;
`;