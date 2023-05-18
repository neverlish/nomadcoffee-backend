import client from "../../client";
import { titleToSlug, uploadToS3 } from "../../shared/shared.util";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createCoffeeShop: protectedResolver(async (_, args, { loggedInUser }) => {
      const {
        name,
        latitude,
        longitude,
        categoryNames,
        photos,
      } = args;

      const userId = loggedInUser.id

      const createCoffeeShop = await client.coffeeShop.create({
        data: {
          name,
          latitude,
          longitude,
          userId,
          categories: {
            connectOrCreate: categoryNames.map((category) => ({
              where: {
                name: category,
              },
              create: {
                name: category,
                slug: titleToSlug(category),
              }
            })),
          }
        }
      });

      const uploadedPhotos = await Promise.all(photos.map((photo) => 
        uploadToS3(photo, userId, 'coffeeShopPhoto')));

      await client.coffeeShop.update({
        where: {
          id: createCoffeeShop.id,
        },
        data: {
          photos: {
            create: uploadedPhotos.map((url) => ({ url })),
          }
        }
      })

      return {
        ok: true,
      }
    })
  }
}