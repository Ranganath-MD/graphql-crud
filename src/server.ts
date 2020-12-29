import express from "express";
import mongoose from "mongoose";
import { Application } from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema/schema"
import { allContacts, createContact, deleteContact, updateContact } from "./mutations/mutation";

const app: Application = express();
const PORT: Number = 5000;

const rootValue = {
  allContacts: () => allContacts(),
  createContact: (args: any) => createContact(args),
  updateContact: ({ _id, input }: any) => updateContact({ _id, input }),
  deleteContact: ({ _id }: any) => deleteContact(_id)
}

app.use("/graphql", graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}))

mongoose.connect('db string goes here', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then(() => {
  app.listen(PORT, () => {
    console.log(`connected to DB`);
    console.log(`Server running at the PORT ${PORT}`);
  })
})
.catch(err => {
  console.error(err);
});

