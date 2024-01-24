import React from 'react';
import styled from 'styled-components';
import Card from '../../Components/Cards/Card';
import Transaction from '../../Components/RecentTransaction/Transaction';
import Activity from '../../Components/WeeklyActivity/Activity';
import Expense from '../../Components/ExpenseStatistics/Expense';
import Transfer from '../../Components/QuickTransfer/Transfer';
import Balance from '../../Components/BalanceHistory/Balance';
import Chip from '../../Asstes/Icons/CardsIcon/Chip_Card.svg';
import Chip2 from '../../Asstes/Icons/CardsIcon/Card2.svg';
import Elipses from '../../Asstes/Icons/CardsIcon/Group.svg';
import Elipses2 from '../../Asstes/Icons/CardsIcon/Group2.svg';
import { CardValue } from '../../Data/Dashboard';


const DashDiv = styled.div `
  width: 95%;
  height: 80avh;
  margin: 1.875rem;
  display: flex;
  margin-top:25px !important;
  flex-direction: column;
  gap:20px;
  
  @media (min-width: 1440px) {
    max-width: 1440px;
    /* overflow-y: auto; */
    /* height: auto; */
    /* min-height: 90%; */
    margin: 1.875rem;
    margin: 0 auto;
  }
`;


const SecondRow = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ThirdRow = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`

const FirstRow = styled.div `
    width: 100%;
    height: 280px;
    /* border: 1px solid #ffd60a; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


const BothCard = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`
const FirstTitle = styled.div`
  width: 100%;
  height: 16%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.375rem;
  color: #343C6A;
  font-family: Inter, sans-serif;

`
// const MyCardTitle = styled.div`
//   width: 30%;
//   height: 100%;
//   border: 1px solid red;
// `
// const SeeAllTitle = styled.div`
//   width: 30%;
//   height: 100%;
//   display: flex;
//   justify-content: flex-end;
//   font-size: 1.063rem;
// `

const BothLengthCard = styled.div`
  width: 100%;
  height: 84%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const FirstCard = styled.div`
  width: 48%;
  height: 100%;
`

const RecentTransactionCard = styled.div`
  width: 32%;
  height: 280px;
`
const RecentTransactionTitle = styled.div`
  width: 100%;
  height: 16%;
  display: flex;
  /* justify-content: space-between; */
  font-weight: bold;
  font-size: 1.25rem;
  color: #343C6A;
  font-family: Inter, sans-serif;
`
const Title = styled.div`
  font-size: 1.375rem;
`

const RecentCard = styled.div`
  /* width: 100%; */
  height: 75%;
  /* border: 1px solid red; */
`
const WeeklyFullLength = styled.div`
  width: 65%;
  height: 100%;
`
const WeeklyTitle = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  font-family: Inter, sans-serif;
  color: #343C6A;
  font-weight: bold;
`
const ActivityCard = styled.div`
  width: 100%;
  height: 84%;
`
const ExpenseStatisticsFullLength = styled.div`
  width: 32%;
  height: 300px;
  display: flex;
  flex-direction: column;
`
const ExpenseTitle = styled.div`
  height: 10%;
  margin-bottom: 1.25rem;
  width: 100%;
  font-size: 20px;
  font-family: Inter, sans-serif;
  color: #343C6A;
  font-weight: bold;
`
const ExpenseCard = styled.div`
  width: 100%;
  height: 100%;
`
const QuickTransferFullLength = styled.div`
  width: 41%;
  height: 100%;
`
const QuickTransferTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  font-family: Inter, sans-serif;
  color: #343C6A;
  margin-bottom:20px;
  font-weight: bold;

`
const TransferCard = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`
const BalanceFullLength = styled.div`
  width: 56%;
  height: 100%;
`
const BalanceTitle = styled.div`
  font-size: 1.25rem;
  font-family: Inter, sans-serif;
  color: #343C6A;
  font-weight: bold;
  margin-bottom:20px;
  width: 100%;

`

const BalanceCard = styled.div`
  width: 100%;
  height: 350px !important;
  box-sizing: border-box;
`

const Dashboard = () => {
  
  return (
    <DashDiv>
      <FirstRow>

        { /* My Card */}
        <BothCard>
          <FirstTitle>
            <div>My Card</div>
            <div>See All</div>
          </FirstTitle>

          <BothLengthCard>
          
            
            <FirstCard>
              <Card isFirstCard={true} Chip={Chip} Elipses={Elipses2} CardData={CardValue[0]} />
            </FirstCard>
            <FirstCard>
              <Card color="#FFFFFF" textColor="#343C6A" labelColor="#718EBF" imageColor="grey" elipsesColor="#9199AF" Chip={ Chip2 } Elipses = {Elipses} CardData={CardValue[0]} />
            </FirstCard>
          
          
          </BothLengthCard>
        </BothCard>

        { /* Recent Transaction */}

        <RecentTransactionCard>
          <RecentTransactionTitle>
            <Title>Recent Transaction</Title>
          </RecentTransactionTitle> 
          <RecentCard>
            <Transaction />
          </RecentCard>
        </RecentTransactionCard>
      </FirstRow>

              {/* Second Row for Weekly and Expense */}
      <SecondRow>
          <WeeklyFullLength>

          {/* ttile*/}
            <WeeklyTitle>
              <Title>Weekly Activity</Title>
            </WeeklyTitle>
            <ActivityCard>
              <Activity />
            </ActivityCard>
          </WeeklyFullLength>

          {/* Expense */}
          <ExpenseStatisticsFullLength>
            <ExpenseTitle>
              <Title>Expense Statistics</Title>
              </ExpenseTitle>
              <ExpenseCard>
                <Expense />
              </ExpenseCard>
          </ExpenseStatisticsFullLength>
      </SecondRow>

        <ThirdRow>
          <QuickTransferFullLength>
            <QuickTransferTitle>
              <Title>Quick Transfer</Title>
              </QuickTransferTitle>
              <TransferCard>
              <Transfer />
              </TransferCard>
          </QuickTransferFullLength>

          <BalanceFullLength>
              <BalanceTitle>
                <Title>Balance History</Title>
              </BalanceTitle>
              <BalanceCard>
                <Balance />
              </BalanceCard>
          </BalanceFullLength>
        </ThirdRow>
    </DashDiv>
  );
};

export default Dashboard;