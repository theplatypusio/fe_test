import gql from 'graphql-tag';

// This is NOT the correct queries, but just a reference as a helper
// You need to add the correct queries and run the generator
// Here's the Mock API Url: https://graphqlzero.almansi.me/api

//graphql query to fetch all posts
export const GET_POST = gql`
  query getPost {
    posts {
      data {
        id
        title
      }
    }
  }
`;
//graphql query to fetch post detail by id
export const GET_POST_BY_ID = gql`
  query getPostById($id: ID!) {
    post(id: $id) {
      id
      title
      body
      user {
        name
        email
      }
    }
  }
`;
