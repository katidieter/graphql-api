const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');
const mongoose = require('mongoose');

const app = express();

mongoose
  .connect("mongodb://localhost/gql-ninja", {useUnifiedTopology: true})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Now listening for requestes on port 4000');
});
