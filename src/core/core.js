import React from 'react';
import ReactDOM from 'react-dom';
import App from '/core/app/components/App';
import * as plugins from '/plugins/pluginRegister';

Object.values(plugins).forEach(p => p.init());

ReactDOM.render(<App />, document.getElementById('app-root'));
