import client from "../../client";

export default {
  Query: {
    seeCategory: (_, { id, page }) => 
      client.category.findUnique({
        where: {
          id,
        }
      })
      .shops({
        take: 5,
        skip: (page - 1) * 5,
        include: {
          categories: true,
          photos: true,
        }
      })
  }
}