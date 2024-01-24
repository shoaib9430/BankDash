import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
  width: 100%;
  /* height: auto; */
  height: 90%;
  /* max-width: 1440px; */
  /* width: 21.875rem;
  height: 14.6875rem; */
  background: ${({ color }) => color || 'linear-gradient(90deg, #4C49ED 100%, #0A06F4 100%)'};
  color: ${({ textColor }) => textColor || '#FFFFFF'};
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  @media (max-width: 1440px) {
    max-width: 1440px;
    /* width: 24vw; */
    min-height: auto;
    margin: 0 auto;
    /* width: 100%; */
  }
`;

const CardLabel = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  color: ${({ labelColor }) => labelColor || "#FFFFFF"};
`;

const CardValueText = styled.div`
  font-size: 0.938rem;
  font-weight: bold;
  color: ${({ color }) => color || "#FFFFFF"};
  
  
`;

const BalanceValue = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* gap: 6.25rem; */
  margin-bottom: 1.25rem;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: "#FFFFFF";
`;

const CardNumberColor = styled.div`
  position: relative;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%);
  height: 2.5rem;
  border-radius: 0 0 1.25rem 1.25rem;
  width: calc(100% + 1.25rem);
  margin-left: -0.625rem;
  padding-left: 0.938rem;
  padding-top: 0.625rem;
`;

const CardNumberRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  font-size: inherit;
`;

const Card = ({ isFirstCard, color, textColor, labelColor, Chip, Elipses, CardData}) => {
  const cardHolderLabelColor = isFirstCard ? 'rgba(255, 255, 255, 0.7)' : '#C6C4FA';
  const validThruLabelColor = isFirstCard ? 'rgba(255, 255, 255, 0.7)' : '#C6C4FA';
  return (
    <CardContainer color = {
      color
    }
    textColor = {
      textColor
    }
    labelColor = {
      labelColor
    }
     >
      <IconContainer></IconContainer>
      <RowContainer>
        <div >
          <CardLabel labelColor={labelColor}>Balance</CardLabel>
          <BalanceValue color={textColor}>{CardData.Balance}</BalanceValue>
        </div>
        <img src={Chip} alt="Chip Card" />
      </RowContainer>
      <RowContainer>
        <div>
          <CardLabel color={cardHolderLabelColor} labelColor={labelColor}>CARD HOLDER</CardLabel>
          <CardValueText color={textColor}>{CardData.Holder}</CardValueText>
        </div>
        <div>
          <CardLabel color={validThruLabelColor} labelColor={labelColor}>VALID THRU</CardLabel>
          <CardValueText color={textColor}>{CardData.Valid}</CardValueText>
        </div>
      </RowContainer>
      <div>
        <CardNumberColor>
          <CardNumberRowContainer>
            <CardValueText color={textColor}>{CardData.CardNo}</CardValueText>
              <img src={Elipses} alt="Elipses" />
          </CardNumberRowContainer>
        </CardNumberColor>
      </div>
      <IconContainer></IconContainer>
    </CardContainer>
  );
};

export default Card;
