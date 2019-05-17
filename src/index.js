import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from "./redux/store";
// import configureStore from './redux/configureStore';
import registerServiceWorker from './registerServiceWorker';
// const store = configureStore()
const rootElement = document.getElementById('root');

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    rootElement
)
registerServiceWorker();
