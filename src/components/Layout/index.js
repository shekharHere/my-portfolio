import React from 'react';
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar';
import Home from '../Home';
import './index.scss'

const Layout = () => {
  return (
    <>
      <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
        <Home />
      </div>
    </div>
    </>
  );
}

export default Layout;
