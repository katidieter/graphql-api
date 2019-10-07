const graphql = require('graphql');
const Author = require('../models/author');
const Book = require('../models/book');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
 } = graphql;

const AuthorType = require('./types/author-type');
const BookType = require('./types/book-type');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Author.findById(args.id);
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return Author.find();
      }
    },
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args){
        return Book.findById(args.id);
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find();
      }
    }
  })
});

module.exports = RootQuery;