//Posts data type
export interface Posts {
  id: string;
  title: string;
}

//list of posts
export interface PostsData {
  typename: string;
  data: [Posts];
}

//Post detail data type
export interface PostDetail {
  id: string;
  title: string;
  boby: string;
  user: {
    name: string;
    email: string;
  };
}
