import client from "../../client";

export default {
  Query: {
    seeCoffeeShop: (_, { id, page }) => 
      client.category.findMany({
        take: 5,
        skip: (page - 1) * 5,
      })
  }
}