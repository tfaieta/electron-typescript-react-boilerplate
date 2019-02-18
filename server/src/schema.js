import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Language {
    _id: ID!
    name: String!
    docs: [Doc!]
  }

  type Framework {
    _id: ID!
    name: String!
    docs: [Doc!]
  }

  type Doc {
    _id: ID!
    title: String!
    pages: [Page!]
  }

  type Page {
    _id: ID!
    title: String!
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Query {
    allUsers: [User]
    getUser(_id: ID!): User
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  type Mutation {
    signup(email: String!, password: String!, username: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    updateUser(_id: ID!, input: UserInput): User
    deleteUser(_id: ID!): User
  }
`;
