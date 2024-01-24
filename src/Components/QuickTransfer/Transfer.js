import React from 'react';
import styled from 'styled-components';
import { Quick } from '../../Data/Dashboard';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
  padding-top: 0.75rem;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 0.938rem;
  /* padding-bottom: 1.25rem; */
`;

const RowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  /* padding: 0.813rem; */
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const IconContainer = styled.div`
`;

const LabelContainer = styled.div`
  font-family: 'Body one Regular', sans-serif;
  font-size: 1rem;
  color: ${(props) => (props.livia ? '#000000' : '#333333')};
  margin-bottom: 0.313rem;
`;

const StatusContainer = styled.div`
  font-family: 'Body two Regular', sans-serif;
  font-size: 0.938rem;
  color: ${(props) => (props.livia ? '#718EBF' : '#718EBF')};
  font-weight: ${(props) => (props.livia ? 'bold' : 'normal')};
`;

const TextDiv = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.938rem;
  color: #333333;
  color: #718EBF;
`;

const LogoDiv = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #dee2e6;
    border-radius:25px;
    height: 2.5rem;
    background-color: #EDF1F7;
    color: #718EBF;
    padding-left: 1.25rem;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
`;

const LogoInnerDiv = styled.div `
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 60%;
    
    
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(231, 228, 231, 0.8);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-top: 0.625rem;
`;

const ArrowIcon = styled(KeyboardArrowRightIcon)`
  color: #718EBF;
`;

const LogoImage = styled.div`
    width: 100%;
    border-radius: 1.563rem;
    background-color: #1814F3;
    color: #dee2e6;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1rem;
`

const Transfer = () => {
  return (
    <Container>
      <RowContainer>
        {Quick.map((item) => (
          <ItemContainer key={item.id}>
            <IconContainer>{item.icon}</IconContainer>
            <LabelContainer livia={item.label === 'Livia Bator'}>{item.label}</LabelContainer>
            <StatusContainer livia={item.label === 'Livia Bator'}>{item.status}</StatusContainer>
          </ItemContainer>
        ))}
        <ArrowContainer>
          <ArrowIcon />
        </ArrowContainer>
      </RowContainer>
      <div>
        <RowContainer>
        <TextDiv>Write Amount</TextDiv>
        <LogoDiv>
         525.50
            <LogoInnerDiv>
                <LogoImage>
                    Send
                    <SendIcon />
                </LogoImage>
            </LogoInnerDiv>
        </LogoDiv>
      </RowContainer>
      </div>
      
    </Container>
  );
};

export default Transfer;
