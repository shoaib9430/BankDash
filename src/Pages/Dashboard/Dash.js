// import React from 'react';
// import Card from '../../Components/Cards/Card';
// import Transaction from '../../Components/RecentTransaction/Transaction';
// import Activity from '../../Components/WeeklyActivity/Activity';
// import Expense from '../../Components/ExpenseStatistics/Expense'
// import Chip from '../../Asstes/Icons/CardsIcon/Chip_Card.svg';
// import Chip2 from '../../Asstes/Icons/CardsIcon/Card2.svg';
// import Elipses from '../../Asstes/Icons/CardsIcon/Group.svg';
// import Elipses2 from '../../Asstes/Icons/CardsIcon/Group2.svg';
// import { CardValue } from '../../Data/Dashboard';
// import Transfer from '../../Components/QuickTransfer/Transfer';
// import Balance from '../../Components/BalanceHistory/Balance';
// import styled from 'styled-components';

// const MainContainer = styled.div`
//     width: 100%;
//     height: 100%;
//     padding: 1.563rem;
//     box-sizing: border-box;
//     border: 1px solid red;
    
// `
// const Titles = styled.div`
//     font-family: Inter, sans-serif;
//     font-size: 1.375rem;
//     color: #343C6A;
//     font-weight: bold;
// `

// const SectionContainer = styled.div`
//     height: 25%;
//     width: 100%;
//     border: 1px solid red;
// `

// const FirstRowContainer = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     height: 100%;
    
// `
// const FirstCard = styled.div`
//     padding-bottom:1rem;
//     /* width: ; */
// `

// const SecondCard = styled.div`
//     display: flex;
//     justify-content: flex-end;
//     padding-bottom: 1.435rem;
//     font-size: 1.063rem;
// `
// const ThirdCard = styled.div`
//     padding-bottom: 1.125rem;
// `

// // Second Row

// const SecondSectionContainer = styled.div`
//     height: 33%;
//     width: 100%;
//     padding-top: 1.35rem;
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
// `
// const SecondSubSectionConatiner = styled.div`
//     height:100%;
//     display: flex;
//     justify-content:space-between;
//     flex-direction: column;
//     max-width:70%;
// `
// const Title = styled.div`
//     padding-bottom: 2vh;
// `

// const SecondRowFirstCard = styled.div`
//     height: 100%;
//     width: 49.6vw;
// `

// const SecondCardSectionContainer = styled.div`
//     display: flex;
//     justify-content: space-between;
//     flex-direction: column;
//     width: 25vw;
// `

// const SecondCardTitle = styled.div`
//     padding-left: 1.25rem;
    
// `

// const SecondRowSecondCard = styled.div`
//     padding-left: 1.25rem;
//     min-height: 39vh;
// `

// const ThirdRowSectionContainer = styled.div`
//     width: 75vw;
//     padding-top: 3vh;
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
// `
// const ThirdRowSubSectionContainer = styled.div`
//     height: 100%;
//     display: flex;
//     justify-content: space-between;
//     flex-direction: column;
//     min-width:30vw;
// `
// const ThridRowSecondSectionContainer = styled.div`
//     display: flex;
//     justify-content: space-between;
//     flex-direction: column;
//     max-width:55vw;
// `
// const ThirdRowSecondTitle = styled.div`
//     padding-left: 1.563rem;
//     padding-bottom: 2vh;
// `
// const ThirdRowSecondCard = styled.div`
//     padding-left:1.25rem;
// `

// const Dash = () => {
//   return (
//     <>
//       <MainContainer>

//         <SectionContainer>
//           <FirstRowContainer>
            
//             <div>
//             <Titles>
//                 <FirstCard>My Cards</FirstCard>
//             </Titles>
//                 <Card isFirstCard={true} CardData={CardValue[0]} Chip={Chip} Elipses={Elipses2} />
//             </div>

//             <div>
//             <Titles>
//                 <SecondCard>See All</SecondCard>
//             </Titles>
//                 <Card isFirstCard={true} CardData={CardValue[0]} color="#FFFFFF" textColor="#343C6A" labelColor="#718EBF" imageColor="grey" elipsesColor="#9199AF" Chip={Chip2} Elipses={Elipses} />    
//             </div>

//             <div>
//             <Titles>
//                 <ThirdCard>Recent Transactions</ThirdCard>
//             </Titles>
              
//                 <Transaction /> 
//             </div>
//           </FirstRowContainer>
//         </SectionContainer>

//         {/* Second row */}
//         <SecondSectionContainer>

//             <SecondSubSectionConatiner>
//             <Titles>
//                 <Title>Weekly Activity</Title>
//             </Titles>
//                 <SecondRowFirstCard><Activity /></SecondRowFirstCard>
//             </SecondSubSectionConatiner>

                
//             <SecondCardSectionContainer>
//             <Titles>
//                 <SecondCardTitle>Expense Statistics</SecondCardTitle>
//             </Titles> 
                
//                 <SecondRowSecondCard><Expense /></SecondRowSecondCard>
//             </SecondCardSectionContainer>   
//         </SecondSectionContainer>



//         {/* Third Row */}
//         <ThirdRowSectionContainer>

//             <ThirdRowSubSectionContainer>
//                 <Titles>
//                     <Title>Quick Transfer</Title>
//                 </Titles>
//                 <div><Transfer /></div>
//             </ThirdRowSubSectionContainer>

                
//             <ThridRowSecondSectionContainer>
//                     <Titles>
//                         <ThirdRowSecondTitle>Balance History</ThirdRowSecondTitle>
//                     </Titles>
//                 <ThirdRowSecondCard><Balance /></ThirdRowSecondCard>
//             </ThridRowSecondSectionContainer>
              
//         </ThirdRowSectionContainer>
        
//       </MainContainer>
//     </>
//   )
// }

// export default Dash;
