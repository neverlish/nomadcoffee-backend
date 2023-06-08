import client from "../../client";

export default {
  Query: {
    searchCoffeeShops: async (_, { keyword }) =>
      client.coffeeShop.findMany({
        where: {
          OR: [
            {
              name: {
                startsWith: keyword,
              },
            },
            {
              categories: {
                some: {
                  name: {
                    startsWith: keyword,
                  }
                }
              }
            }
          ]
        },
        include: {
          categories: true,
          photos: true,
        }
      }),
  },
};