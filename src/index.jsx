import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './home';
// import reportWebVitals from './reportWebVitals';
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import { Col, Row } from "antd";

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const home = ReactDOM.createRoot(
  document.getElementById('home')
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Row>
        <Col span={6}><Home /></Col>
        <Col span={18}><App /></Col>
      </Row>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
