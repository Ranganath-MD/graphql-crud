import { buildSchema, GraphQLSchema } from "graphql";

export const schema: GraphQLSchema = buildSchema(`
  type Contact{
    _id: String!
    name: String!
  }
  type Query{
    allContacts: [Contact!]
  }
  input ContactInput{
    name: String!
  }
  type Mutation{
    createContact(inputContact: ContactInput): Contact
    updateContact(_id: String!, input: ContactInput): Contact
    deleteContact(_id: String!): [Contact!]!
  }
`);