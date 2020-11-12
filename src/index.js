import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//  参数传递
//  <Component xxxx='xxx'> 组件内部使用this.props.xxxx获取
ReactDOM.render(
  <React.StrictMode>
    <App name="1" />
    <App name="2" />
    <App name="3" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
