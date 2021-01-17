import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
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
    <div className="container" style={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
      <StaticQuery query={PRODUCTS_QUERY}
        render={
          ({ allStripePrice, allStripeProduct }) => {
            return allStripeProduct.edges.map(product => {
              const skus = allStripePrice.edges.filter(sku => sku.node.product.id === product.node.id)
              return (
                <Product key={product.node.id} skus={skus} product_name={product.node.name} />
              )
            })
          }
        }
      />
    </div>
  )
}

export default Products