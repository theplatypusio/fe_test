import React from 'react';
import { Posts, PostsData } from './interfaces';
import Router from 'next/router';
import styles from './index.scss';

interface PostProps {
  postsData: PostsData;
}

const postlist: React.FC<PostProps> = (props) => {
  return (
    <>
      {props.postsData.data.map((post: Posts) => (
        <div
          key={post.id}
          onClick={(e) => {
            e.preventDefault();
            //send id to shallow router on post select
            Router.push(`/?id=${post.id}`, undefined, { shallow: true });
          }}
          onKeyPress={(e) => {
            e.preventDefault();
          }}
        >
          <li className={styles.gradientlist}>{post.title}</li>
        </div>
      ))}
    </>
  );
};

export default postlist;
