import { NextPage } from 'next';
import React from 'react';
import Page from 'components/layout/page';
import Postlist from './postlist';
import styles from './index.scss';
import '../styles/main.scss';
import { GET_POST } from '../gql/queries';
import { useQuery } from '@apollo/react-hooks';
import Header from './header';
import Postdetail from './postdetail';

type Props = {};

const Index: NextPage<Props> = () => {
  //get all posts from api on pageload
  const { loading, error, data } = useQuery(GET_POST);
  if (error) return <div className={styles.aligncenter}>Oops! Somthing went wrong.</div>;
  if (loading) return <div className={styles.aligncenter}>Loading...</div>;
  return (
    <Page {...data}>
      <div className={styles.main}>
        <Header />
        <div className={styles.container}>
          <div className={styles.leftcol}>
            <Postlist postsData={data.posts} />
          </div>
          <div className={styles.rightcol}>
            <Postdetail />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Index;
