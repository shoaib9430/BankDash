import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const LayoutContainer = styled.div `
  display: flex;
  @media (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 260px;
  // overflow: hidden;
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        <Header />
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;
