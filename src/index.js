import React from 'react';
import ReactDOM from 'react-dom';
import App from '/core/components/App';
import { makeRoutable } from '/core/router/routeManager';
import plugins from '/plugins/pluginRegister';

export const appContext = makeRoutable({ plugins });

Object.values(plugins).forEach(p => p.init(appContext));

ReactDOM.render(<App />, document.getElementById('app-root'));
