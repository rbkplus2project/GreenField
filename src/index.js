import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer.js';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



const store = createStore(rootReducer);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));

