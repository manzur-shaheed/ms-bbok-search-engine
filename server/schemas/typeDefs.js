// apollo server
const { gql } = require('apollo-server-express');

// query data
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    bookId: String!
    authors: String[]
    descriptions: String!
    title: Int
    image: Int
    link:
  }

  type Auth {
    token:
    user: [User]
  }

  type Query me {
    tech: [Tech]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    login(email, password): Auth
    addUser(username, email, password): Auth
    saveBook(authors, description, bookId, image, link): User
    removeBook(bookId): User
  }
`;

module.exports = typeDefs;
