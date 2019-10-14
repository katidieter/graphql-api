import React from 'react';
import { graphql } from 'react-apollo';
import {getAuthorsQuery} from '../queries/queries.js';

function AddBook({ data: { authors } }) {
  return (
    <form id="add-book">
      <div class="field">
        <label>Book name:</label>
        <input type="text" />
      </div>

      <div class="field">
        <label>Genre:</label>
        <input type="text" />
      </div>

      <div class="field">
        <label>Author:</label>
        <select>
            <option>Select an author</option>
          {(authors || []).map(({ id, name }) => (
            <option key={id} value={id}>{name}</option>
          ))}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}
export default graphql(getAuthorsQuery)(AddBook);
