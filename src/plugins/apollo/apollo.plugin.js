import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { registerProvider } from '/app/app.plugin';
import config from '/config.json';

const client = new ApolloClient({
  uri: config.grapqhlUrl,
});

export default {
  init() {
    registerProvider(ApolloProvider, { client });
  },
};
