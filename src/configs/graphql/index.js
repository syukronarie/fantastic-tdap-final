import { ApolloClient, InMemoryCache } from '@apollo/client';
import CONST from '../../utils/constants';

const { BASE_URL_GRAPHQL_API } = CONST;

const client = new ApolloClient({
  uri: BASE_URL_GRAPHQL_API,
  cache: new InMemoryCache(),
});

export default client;
