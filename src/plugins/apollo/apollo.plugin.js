import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import config from '/config.json';

const client = new ApolloClient({
  uri: config.grapqhlUrl,
});

export default {
  init({ providers }) {
    providers.registerProvider(ApolloProvider, { client });
  },
};
