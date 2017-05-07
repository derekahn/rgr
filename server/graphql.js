import connect from 'express-graphql'; // GraphQLHTTP

import {
  GraphQLSchema as Gschema,

  // reference
  GraphQLObjectType as Gobject,
  GraphQLList as Glist,

  // primitive
  GraphQLString as Gstring,
  // GraphQLInt as Gint,
} from 'graphql';

export default db => {
  const linkType = new Gobject({
    name: 'Link',
    fields: () => ({
      _id: { type: Gstring },
      title: { type: Gstring },
      url: { type: Gstring },
    }),
  });

  const schema = new Gschema({
    query: new Gobject({
      name: 'Query',
      fields: () => ({
        links: {
          type: new Glist(linkType),
          resolve: () => db.collection('links').find({}).toArray(),
        },
      }),
    }),
  });

  return connect({
    schema,
    graphiql: true,
  });
};
