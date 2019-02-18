import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import User from "./models/user";
import config from "./config";

// connect to MongoDB database
mongoose.Promise = global.Promise;
mongoose
  .connect(config.db.uri, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Database is connected"))
  .catch(error => console.log(error));

// create Apollo Server with imported schema and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    User
  }),
  introspection: true,
  playground: {
    settings: {
      "editor.theme": "dark"
    }
  }
});

// start the Apollo GraphQL Server
server.listen().then(({ url }) => {
  console.log(`GraphQL Server is running on ${url}`);
});
