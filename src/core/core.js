import React from 'react';
import ReactDOM from 'react-dom';
import App from '/core/app/components/App';
import * as plugins from '/plugins/pluginRegister';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import config from '../config.json';

const client = new ApolloClient({
  uri: config.grapqhlUrl,
});

Object.values(plugins).forEach(p => p.init());

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app-root')
);
