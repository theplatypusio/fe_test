import { ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import React, { useCallback, useEffect, useState } from 'react';

import { API_URL } from 'constants/graphql';

type Props = {};

const ApolloAppProvider: React.FC<Props> = ({ children }) => {
  const [apolloClient, setClient] = useState<any>();

  const initApollo = useCallback(() => {
    // Get token from localStorage
    const link = createHttpLink({
      uri: API_URL,
      credentials: 'same-origin',
      fetch: fetch as any,
    });

    // The Apollo Client
    const _client = new ApolloClient<NormalizedCacheObject>({
      link,
      cache: new InMemoryCache() as any,
    });

    setClient(_client);
  }, []);

  useEffect(initApollo, []);

  return apolloClient ? <ApolloProvider client={apolloClient}>{children}</ApolloProvider> : null;
};

export default ApolloAppProvider;
