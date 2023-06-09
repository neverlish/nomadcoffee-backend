import { gql } from "apollo-server";

export default gql`
  type Category {
    id:     Int!
    name:   String!
    slug:   String!
    shops:  [CoffeeShop!]!
    totalShops: Int!
  }
`