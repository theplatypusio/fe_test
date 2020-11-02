import React from 'react';
import styles from './index.scss';
import Router from 'next/router';

const header = () => {
  return (
    <div className={styles.header}>
      <span>{Router && Router.query.id ? `Post - ${Router.query.id}` : 'Post'}</span>
    </div>
  );
};

export default header;
