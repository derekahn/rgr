import connect from 'express-graphql'; // GraphQLHTTP
import {
  GraphQLSchema as gSchema,
  GraphQLObjectType as gObject,
  GraphQLInt as gInt,
  GraphQLString as gString,
} from 'graphql';

const schema = new gSchema({
  query: new gObject({
    name: 'Query',
    fields: () => ({
      counter: {
        type: gInt,
        resolve: () => 42,
      },
      message: {
        type: gString,
        resolve: () => 'Hello GraphQL!',
      },
    }),
  }),
});

export default connect({
  schema,
  graphiql: true,
});
