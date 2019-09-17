import React from 'react';
import ReactDOM from 'react-dom';
import context from '/app/context.js';
import App from '/app/components/App';
import * as plugins from '/plugins/pluginRegister';

export default {
  start() {
    // setup context

    // initialize all plugins
    Object.values(plugins).forEach(p => p.init(context));

    // check setup
    const routeOrphans = context.router.areThereRouteOrphansLeft('app');
    if (routeOrphans) {
      console.log(routeOrphans);
      throw new Error(
        'Some route(s) have been registered to a sub router that does not exist'
      );
    }

    // render
    ReactDOM.render(<App />, document.getElementById('app-root'));
  },
};
