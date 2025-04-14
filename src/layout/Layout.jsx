import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { Outlet, replace, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

const Layout = () => {
  const navigate = useNavigate();
  const ecomToken = localStorage.getItem('ecomToken');

  useEffect(() => {
    if (!ecomToken) {
      navigate('/',replace);
    }
  }, [ecomToken, navigate]);

  // Optional: prevent showing dashboard layout until token is checked
  if (!ecomToken) return null; // or a loading spinner

  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export default Layout;
