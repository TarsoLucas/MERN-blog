import React from 'react'; 
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './reducers';

const store = configureStore(reducers, compose(applyWiddleware, thunk));

ReactDOM.render(<App />, document.getElementById('root'));
