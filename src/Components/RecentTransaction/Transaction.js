import React from 'react';
import styled from 'styled-components';
import Recent from '../../Data/Dashboard';

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  /* height: auto; */
  /* width: 21.875rem;
  height: 14.6875rem; */
  border-radius: 1.25rem;
  /* padding-left: 10px; */
  padding: 0.625rem;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  box-sizing: border-box;
  font-size: 0.75rem;
  background-color: #FFFFFF;
  /* margin-top: 20px; */
  font-family: 'Inter', sans-serif;
  @media (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
    /* max-height: 1440px; */
  }
`;

const SecondDiv = styled.div`
  /* padding: 0.5rem; */
  width: 100%;
  height: 25%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const LogoDiv = styled.div`
  height: 100%;
  width: 16%;
  border-radius: 50%;
  background-color: ${({ logoColor }) => logoColor || '#FFFFFF'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SecondMain = styled.div`
  height: 100%;
  width: 65%;
`;

const LabelDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  color: #232323;
  font-size: 1rem;
`;

const DateDiv = styled.div`
  width: 100%;
  /* height: 50%; */
  font-size: 0.938rem;
  color: #718EBF;
`;

const AmountDiv = styled.div`
  padding-right: 1rem;
  height: 100%;
  width: 15%;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Transaction = () => {
  return (
    <>
      <MainDiv>
        {Recent.map((transaction) => (
          <SecondDiv key={transaction.id}>
            <LogoDiv logoColor={transaction.logoColor}>{transaction.icon}</LogoDiv>
            <SecondMain>
              <LabelDiv logoColor={transaction.logoColor}>{transaction.label}</LabelDiv>
              <DateDiv>{transaction.Date}</DateDiv>
            </SecondMain>
            <AmountDiv style={{ color: transaction.deduction ? 'red' : 'green' }}>{transaction.Amount}</AmountDiv>
          </SecondDiv>
        ))}
      </MainDiv>
    </>
  );
};

export default Transaction;
