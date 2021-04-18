import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './component'
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import configureAppStore from "./store/store";


const store = configureAppStore()
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
reportWebVitals();
