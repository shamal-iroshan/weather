import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import AppRoute from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={"/"}>
      <AppRoute/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);