import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import 'mdbreact/dist/css/mdb.css';
import App from './components/App.js';
import { Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import rootReducer from './reducers/rootReducer.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const store = createStore(rootReducer);

// This file renders the entire react app to the HTML to show it in the browser
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
