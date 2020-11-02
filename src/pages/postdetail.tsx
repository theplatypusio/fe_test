import React from 'react';
import Router from 'next/router';
import { GET_POST_BY_ID } from '../gql/queries';
import { useQuery } from '@apollo/react-hooks';
import styles from './index.scss';

const Postdetails = () => {
  //get post id from router
  const id = Router.query.id ? Router.query.id : 0;

  //get post detail by id from api
  const { loading, error, data } = useQuery(GET_POST_BY_ID, {
    variables: { id },
  });
  if (error) return <div className={styles.aligncenter}>Oops! Something went wrong.</div>;
  return (
    <>
      {loading && id > 0 ? (
        <span>Loading...</span>
      ) : data && data.post.title ? (
        <div>
          <h2>{data.post.title}</h2>
          <span>{data.post.body}</span>
          <span className={styles.uileft}>{data.post.user.name}</span>
          <span className={styles.uiright}>{data.post.user.email}</span>
        </div>
      ) : (
        <div className={styles.aligncenter}>Which post do you wanna read?</div>
      )}
    </>
  );
};

export default Postdetails;
