import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    editCoffeeShop: protectedResolver(async (_, args, { loggedInUser }) => {
      const { id, name, latitude, longitude } = args;
      const coffeeShop = await client.coffeeShop.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          userId: true,
        }
      });
      if (!coffeeShop || coffeeShop.userId != loggedInUser.id) {
        return {
          ok: false,
          error: "not found",
        }
      }
      await client.coffeeShop.update({
        where: { id },
        data: {
          name,
          latitude,
          longitude,
        }
      })
      return {
        ok: true,
      }
    })
  }
}