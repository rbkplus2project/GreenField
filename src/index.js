import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './components/app.js';
import { Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer.js';
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
=======
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer';
import App from './App.js';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> 1ef4d48e961fd602bac215cd02f20178ec3d6795
