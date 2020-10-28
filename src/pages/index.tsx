import { NextPage } from 'next';
import React from 'react';

import Page from 'components/layout/page';

import styles from './index.scss';

type Props = {};

const Index: NextPage<Props> = ({ ...rest }) => {
  return (
    <Page {...rest}>
      <h1>Title</h1>
    </Page>
  );
};

export default Index;
