const { gql } = require("apollo-server");

const typeDefs = gql`
# This is Schema
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends:[User]
    favoriteFilms:[Movie]
  }
  type Movie{
    id:ID!
    name: String!
    isInTheatres:Boolean!
  }

# This is Query
  type Query {
    users: [User!]!
    user(id:ID!):User!
    films:[Movie]!
    film(name:String!):Movie!
  }

  input createUserInput{
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = India
  }
  input updateUserInput{
    id:ID!
    newUser:String!
  }
  input deleteUserInput{
    id:ID!
  }
  type Mutation{
    createUser(input:createUserInput!):User
    updateUser(input:updateUserInput!):User
    deleteUser(input:deleteUserInput!):User
  }
  enum Nationality {
    American
    British
    Spanish
    Indian
    Irish
  }
`;
module.exports = typeDefs;
