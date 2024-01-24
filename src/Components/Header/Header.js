import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import Notification from '../../Asstes/Icons/HeadersIcons/Notification';
import SettingIcon from '../../Asstes/Icons/HeadersIcons/Setting';
import SearchIcon from '@mui/icons-material/Search';
import Profile from '../../Asstes/Icons/HeadersIcons/Mask Group.svg';

const HeaderWrapper = styled.div`
/* width: 100vw; */
  height: 5.313rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  border-bottom: 1px solid #E6EFF5;
  color: #343C6A;
  @media (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

const Circle = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #f5f7fa;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  margin-left: 1.175rem;
  /* padding-right: 10px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
`;

const HeaderTitle = styled.div`
  width: 50%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Inter, sans-serif;
  font-size: 1.75rem;
  font-weight: bold;
`;

const SecondHeaderLength = styled.div`
  width: 44%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #8BA3CB;
  font-family: Inter, sans-serif;
  font-size: 0.938rem;
`;

const SearchInputContainer = styled.div`
  width: 50%;
  height: 3.125rem;
  background-color: #F5F7FA;
  border-radius: 2.5rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

const StyledSearchInput = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 1rem;
  color: #8BA3CB;
`;


function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderTitle>Overview</HeaderTitle>
        <SecondHeaderLength>
          <SearchInputContainer>
            <SearchIcon />
            <StyledSearchInput
              type="text"
              placeholder="Search for something"
            />
          </SearchInputContainer>

          <Circle>
            <SettingIcon />
          </Circle>

          <Circle>
            <Notification />
          </Circle>

          <img style={{width:"60px",height:"60px"}} src={Profile} alt="Profile" />

        </SecondHeaderLength>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
