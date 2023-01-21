import React from 'react';
import useAuth from './useAuth';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectAgent = ({ component: Component, ...rest }) => {
  let isAuthorized = false;
  const token =  JSON.parse(localStorage.getItem('role'));
  console.log("🚀 ~ file: ProtectAgent.jsx:8 ~ ProtectAgent ~ token", token)
  

  if (token !== null) {
    isAuthorized = true;
  }
  return (isAuthorized && token === "AGENT") ? <Outlet /> : <Navigate to='/' />;

};

export default ProtectAgent;