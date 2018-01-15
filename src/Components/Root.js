import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TodoApp from './TodoApp';

const Root = ({ store }) => (
    <Provider store={store} >
        <Router>
            <div>
                <h1>Todos:</h1>
                <Route path="/:filter?" component={TodoApp}/>
            </div>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;