import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainRoute, LoginRoute, QuizRoute } from './Routes';
import { Main } from './Pages/Main/';
import { Login } from './Pages/Login/';
import { Quiz } from './Pages/Quiz';
import { Error404 } from './Pages/Error404';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={MainRoute} exact element={<Main />} />
        <Route path={LoginRoute} element={<Login />} />
        <Route path={QuizRoute} element={<Quiz />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter >
  );
}
