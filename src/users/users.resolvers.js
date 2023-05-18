import client from "../client";

export default {
  User: {
    followings: (root, { page }) => client.user
      .findUnique({ where: { id: root.id } })
      .followings({
        take: 5,
        skip: (page - 1) * 5,
      }),
    followers: (root, { page }) => client.user
      .findUnique({ where: { id: root.id } })
      .followers({
        take: 5,
        skip: (page - 1) * 5,
      }),
  }
}