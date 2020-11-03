import { NextPage } from 'next';
import React from 'react';
import Page from 'components/layout/page';
import Header from './header';
import Postlist from './postlist';
import Postdetail from './postdetail';
import styles from './index.scss';
import '../styles/main.scss';
import { GET_POST } from '../gql/queries';
import { useQuery } from '@apollo/react-hooks';

type Props = {};

const Index: NextPage<Props> = () => {
  //get all posts from https://graphqlzero.almansi.me/api on pageload
  const { loading, error, data } = useQuery(GET_POST);
  if (error) return <div className={styles.aligncenter}>Oops! Somthing went wrong.</div>;
  if (loading) return <div className={styles.aligncenter}>Loading...</div>;
  return (
    <Page {...data}>
      <div className={styles.main}>
        <Header />
        <div className={styles.container}>
          <div className={styles.leftcol}>
            {/* send all posts data as props to child component */}
            <Postlist postsData={data.posts} />
          </div>
          <div className={styles.rightcol}>
            {/*child component for displaying details of selected post */}
            <Postdetail />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Index;
