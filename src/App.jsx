import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainRoute, LoginRoute, QuizRoute, ErrorRoute } from './Routes';
import {Main, Login, Quiz, Error404} from "./Pages"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={MainRoute} exact element={<Main />} />
        <Route path={LoginRoute} element={<Login />} />
        <Route path={QuizRoute} element={<Quiz />} />
        <Route path={ErrorRoute} element={<Error404 />} />
      </Routes>
    </BrowserRouter >
  );
}
