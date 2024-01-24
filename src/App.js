// App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Shared/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';
// import ReusableCard from './Pages/Dashboard/ReusableCard';
import Transaction from './Pages/Transactions/Transaction';
import Account from './Pages/Accounts/Account';
import Credit from './Pages/CreditCards/Credit';
import Investment from './Pages/Investments/Investment';
import Loan from './Pages/Loans/Loan';
import Privilege from './Pages/MyPrivileges/Privilege';
import Service from './Pages/Services/Service';
import Setting from './Pages/Setting/Setting';
import styled from 'styled-components';

const FullScreenWrapper = styled.div `
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #F5F7FA;
  z-index: -1;
`;



function App() {
  return (
    <>
      <FullScreenWrapper />
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/account" element={<Account />} />
          <Route path="/creditcard" element={<Credit />} />
          <Route path="/invesment" element={<Investment />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/privilege" element={<Privilege />} />
          <Route path="/service" element={<Service />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
