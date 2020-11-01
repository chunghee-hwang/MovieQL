import { GraphQLServer } from 'graphql-yoga';
import resolvers from './grapqhl/resolvers';
const server = new GraphQLServer({
  typeDefs: 'grapqhl/schema.graphql',
  resolvers,
});

server.start(() => {
  console.log('Grapqhl Server Running');
});
