import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Login = React.lazy(() => import('views/Login/Login'));

const App = () => {
  return (
    <Suspense
      fallback={<div style={{ padding: '1.5rem' }}>Please wait...</div>}
    >
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
        <Routes></Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
