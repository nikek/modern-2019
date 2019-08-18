import React from 'react';
import ReactDOM from 'react-dom';
import App from '/app/components/App';
import * as plugins from '/plugins/pluginRegister';
import { getProviderCapabilities } from '/shared/providerManager';
import { getRoutingCapabilities } from '/shared/routeManager';

export const { registerProvider, AppProvider } = getProviderCapabilities();

export const {
  registerRoute,
  registerRedirect,
  Router,
} = getRoutingCapabilities();

export default {
  init() {
    Object.values(plugins).forEach(p => p.init());

    ReactDOM.render(<App />, document.getElementById('app-root'));
  },
};
