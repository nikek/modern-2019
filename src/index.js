import React from 'react';
import ReactDOM from 'react-dom';
import App from '/core/components/App';
import routeManager from '/core/router/routeManager';
import plugins from '/plugins/pluginRegister';

plugins.forEach(p => p(routeManager));

ReactDOM.render(<App />, document.getElementById('app-root'));
