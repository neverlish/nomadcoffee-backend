import { gql } from "apollo-server";

export default gql`
  type CoffeeShopPhoto {
    id:     Int!
    url:    String!
    shop:   CoffeeShop!
  }
  type CoffeeShop {
    id:         Int!
    name:       String!
    latitude:   String!
    longitude:  String!
    user:       User!
    photos:     [CoffeeShopPhoto!]!
    categories: [Category!]!
  }
`;