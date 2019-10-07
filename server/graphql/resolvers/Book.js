const graphql = require('graphql');
const Book = require('../../models/book');

const {
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
 } = graphql;

const BookType = require('../types/book-type');

module.exports = {
  query: {
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
  },
  mutation: {
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args){
        let book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId
        });
        return book.save();
      }
    }
  }
}