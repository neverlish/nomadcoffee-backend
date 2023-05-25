import client from "../client";

export default {
  CoffeeShop: {
    user: ({ userId }) => 
      client.user.findFirst({ where: {
        id: userId
      }})
  }
}