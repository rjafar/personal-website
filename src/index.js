import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import About from './components/About';
import Header from './components/Header';
import Experience from './components/Experience';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header />
    <About />
    <Experience />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
