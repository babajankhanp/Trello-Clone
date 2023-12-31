import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppProviders from './appProviders';

ReactDOM.render(
    <React.StrictMode>
        <AppProviders />
    </React.StrictMode>,
    document.getElementById('root')
);
