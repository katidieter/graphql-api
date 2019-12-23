const graphql = require('graphql');
const Book = require('../models/book');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
 } = graphql;

const BookType = require('./types/book-type');
const AuthorResolver = require('./resolvers/Author');
const BookResolver = require('./resolvers/Book');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    author: AuthorResolver.query.author,
    authors: AuthorResolver.query.authors,
    book: BookResolver.query.book,
    books: BookResolver.query.books,
  })
});

module.exports = RootQuery;