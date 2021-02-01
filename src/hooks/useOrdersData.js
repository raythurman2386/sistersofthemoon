// import { useStaticQuery, graphql } from "gatsby"

// export const useOrdersData = () => {
//   const { allStripeBalanceTransaction } = useStaticQuery(
//     graphql`
//       query AllOrders {
//         allStripeBalanceTransaction {
//           edges {
//             node {
//               id
//               amount
//               created
//               description
//               status
//               source {
//                 amount
//                 amount_captured
//                 description
//                 id
//                 paid
//                 payment_method
//                 receipt_url
//                 refunded
//                 status
//                 customer {
//                   id
//                   email
//                 }
//                 billing_details {
//                   name
//                   email
//                   address {
//                     country
//                     postal_code
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `
//   )
//   return allStripeBalanceTransaction
// }
