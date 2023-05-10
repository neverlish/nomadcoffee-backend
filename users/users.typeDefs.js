import { gql } from "apollo-server";

export default gql`
  type User {
    id: String!
    username: String!
    email: String!
    name: String!
    location: String!
    password: String!
    avatarURL: String!
    githubUsername: String!
    createdAt: String!
    updatedAt: String!
  }
  type Mutation {
    createAccount(
      username: String!
      email: String!
      name: String!
      location: String!
      password: String!
      avatarURL: String!
      githubUsername: String!
    ): CreateAccountResponse
  }
  type CreateAccountResponse {
    ok: Boolean!
    error: String
  }
  type Query {
    me: User
  }
`;