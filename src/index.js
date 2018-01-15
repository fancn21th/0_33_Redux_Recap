import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configreStore from './configureStore';
import Root from './Components/Root';

ReactDOM.render(
    <Root
        store={configreStore()}
    />,
    document.getElementById('root')
);
