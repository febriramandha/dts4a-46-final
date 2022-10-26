import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import Routes dan Route di sini
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListMovie from './containers/ListMovie';
import ListSeries from './containers/ListSeries';
import ListNewPopuler from './containers/ListNewPopuler';
import MyList from './containers/MyList';
import DetailMovies from './containers/DetailMovies';
// import LoginLayout from "./components/LoginLayout";

import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";

import ProtectedComponent from './components/ProtectedComponent';

// import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedComponent>
            <App />
          </ProtectedComponent>
        }>
          <Route path="/" element={<ListMovie />} />
          <Route path="list-series" element={<ListSeries />} />
          <Route path="new-populer" element={<ListNewPopuler />} />
          <Route path="my-list" element={<MyList />} />
          <Route path="detail" element={<DetailMovies />} />

        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        {/* <Route path="login" element={<LoginLayout />} /> */}
      </Routes>
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
