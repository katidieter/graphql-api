const graphql = require('graphql');

const { GraphQLObjectType } = graphql;

const AuthorResolver = require('./resolvers/Author');
const BookResolver = require('./resolvers/Book');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: AuthorResolver.mutation.addAuthor,
    addBook: BookResolver.mutation.addBook,
  }
});

module.exports = Mutation;