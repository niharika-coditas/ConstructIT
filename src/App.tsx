import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from 'redux/store';

const Login = React.lazy(() => import('./views/Login/Login'));
const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const Report = React.lazy(() => import('./views/Report/Report'));
const Teams = React.lazy(() => import('./views/Team/Teams'));
const Tools = React.lazy(() => import('./views/Tools/Tools'));
const UnAuthorizedHOC = React.lazy(
  () => import('./hoc/UnAuthorizedHOC/UnAuthorizedHOC')
);
const AuthorizedHOC = React.lazy(
  () => import('./hoc/AuthorizedHOC/AuthorizedHOC')
);

const App = () => {
  return (
    <Provider store={store}>
      <Suspense
        fallback={<div style={{ padding: '1.5rem' }}>Please wait...</div>}
      >
        <BrowserRouter>
          <Routes>
            <Route element={<UnAuthorizedHOC />}>
              <Route path="/" element={<Login />} />
              <Route path="login" element={<Login />} />
            </Route>
            <Route element={<AuthorizedHOC />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="report" element={<Report />} />
              <Route path="teams" element={<Teams />} />
              <Route path="tools" element={<Tools />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
};

export default App;
