import React from 'react';
import ReactDOM from 'react-dom';
import App from '/core/components/App';
import routeManager from '/core/router/routeManager';
import plugins from '/plugins/pluginRegister';

const app = Object.assign({}, routeManager, { plugins });

Object.values(plugins).forEach(p => p.init(app));

ReactDOM.render(<App />, document.getElementById('app-root'));
