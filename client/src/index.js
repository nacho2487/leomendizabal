import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { StoreProvider } from './store/store';
import App from './views';

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>, 
    document.getElementById('root')
);
