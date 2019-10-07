const graphql = require('graphql');
const _ = require('lodash');
const Book = require('../../models/book');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

const BookType  = require('./book-type');

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type : GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find({authorId: parent.id});
      }
    }
  })
});

module.exports = AuthorType;