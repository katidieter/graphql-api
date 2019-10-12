import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`

function BookList({ data: { books, loading } }) {
  return (
    <div id="book-list">
      <ul>
        {(books || []).map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
export default graphql(getBooksQuery)(BookList);
