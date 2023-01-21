import React from 'react';
import useAuth from './useAuth';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  let isAuthorized = false;
  const token = JSON.parse(localStorage.getItem('role'));

  if (token !== null) {
    isAuthorized = true;
  }
  return (isAuthorized && token === "ADMIN") ? <Outlet /> : <Navigate to='/' />;

};

export default ProtectedRoute;