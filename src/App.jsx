import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainRoute, LoginRoute } from './Routes';
import { Main } from './Pages/Main/';
import { Login } from './Pages/Login/';
import { Error404 } from './Pages/Error404';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={MainRoute} exact element={<Main />} />
        <Route path={LoginRoute} element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
