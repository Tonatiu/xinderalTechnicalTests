import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './componentes/main';
import Footer from './componentes/common/footer';
import Header from './componentes/common/header';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Header/>,
  document.getElementById('header')
);
ReactDOM.render(
  <MainPage/>,
  document.getElementById('root')
);
ReactDOM.render(
  <Footer/>,
  document.getElementById('footer')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
