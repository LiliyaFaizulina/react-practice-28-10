import { Route, Routes } from 'react-router-dom';
import { UsersPage } from 'pages/UsersPage/UsersPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { Layout } from './Layout/Layout';
import { RegisterPage } from 'pages/RegisterPage/ReristerPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="users" element={<UsersPage />} />
        </Route>
      </Routes>
    </>
  );
};
