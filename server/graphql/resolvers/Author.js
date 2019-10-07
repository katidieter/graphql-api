const graphql = require('graphql');
const Author = require('../../models/author');

const {
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList
 } = graphql;

const AuthorType = require('../types/author-type');

module.exports = {
  query: {
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
  },
  mutation: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
      },
      resolve(parent, args){
        let author = new Author({
          name: args.name,
          age: args.age
        });
        return author.save();
      }
    },
  }
}