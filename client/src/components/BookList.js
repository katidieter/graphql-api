import React from 'react';
import { graphql } from 'react-apollo';
import {getBooksQuery} from '../queries/queries.js';

function BookList({ data: { books } }) {
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
