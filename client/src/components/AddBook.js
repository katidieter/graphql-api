import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getAuthorQuery = gql`
  {
    authors {
      name
      id
    }
  }
`

function AddBook({ data: { authors, loading } }) {
  return (
    <form id="add-book">
      <div class="field">
        <label>Book name:</label>
        <input type="text"/>
      </div>

      <div class="field">
        <label>Genre:</label>
        <input type="text"/>
      </div>

      <div class="field">
        <label>Author:</label>
        <select>
          <option>Select auhtor</option>
        </select>
      </div>
      
      <button>+</button>
    </form>
  );
}
export default graphql(getAuthorQuery)(AddBook);
