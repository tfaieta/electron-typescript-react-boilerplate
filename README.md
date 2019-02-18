<h1>Getting Started</h1>

**To load up from scratch:**

1. Pull Repo
2. Run `yarn` inside root
3. Run `cd server && yarn`
4. To start up the client `yarn start` from the root

**To start Caffè:**

1. Run `yarn start` inside root

**To manually start Caffettiera (GraphQL Server), connected with Macinacaffè (MongoDB Atlas):**

1. Run `cd server`
2. Run `yarn start`
3. Go to [localhost:4000](http://localhost:4000) for GraphQL Playground

4. Run `cd server && cd database`
5. Run `docker-compose up -d` _only need to run when `docker-compose.yml` is updated_
6. Run `prisma deploy` _[Docker](https://docs.docker.com/) needs to be running_
7. Run `prisma generate` _generates Prisma-Schema_
8. Run `prisma playground` _to interact/demo with database_

<h1>Helpful Links</h1>

[Electron Tutorial - Getting Started](https://getstream.io/blog/takeaways-on-building-a-react-based-app-with-electron/)

[A Great Guide for GraphQL with Apollo Server](https://www.robinwieruch.de/graphql-apollo-server-tutorial/)

[Another Helpful Guide for GraphQL/Apollo/Mongoose](https://www.dzurico.com/apolloserver-2-0-how-to-create-a-graphql-server/)

[Queries with Mongoose](https://mongoosejs.com/docs/queries.html)
