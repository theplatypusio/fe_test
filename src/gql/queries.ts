import gql from 'graphql-tag';

// This is NOT the correct queries, but just a reference as a helper
// You need to add the correct queries and run the generator
// Here's the Mock API Url: https://graphqlzero.almansi.me/api
const getUsers = gql`
  query getUsers {
    users {
      data {
        name
      }
    }
  }
`;
