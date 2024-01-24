import React, { useState } from 'react';
import { DASHBOARD_SIDEBAR_LINKS } from '../../Lib/Constants/navigation';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HomeIcon from '../../Asstes/Icons/SidebarIcons/iconfinder_vector_65_09_473792 1.svg';


const SidebarContainer = styled.div`
  width: 260px;
  height: 100vh;
  padding: 1rem;
  overflow: auto;
  position:fixed;
  display: flex;
  flex-direction: column;
  overfoew: auto;
  color: white;
  background-color: white;
  border: 1px solid #E6EFF5;
  
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.625rem;
  margin-bottom: 3.55rem;

`;

const LogoText = styled.span`
  font-size: 1.563rem;
  color: #343C6A;
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  margin-left: 0.75rem;

`;
const LabelText = styled.span `
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;

`;

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.313rem;
  margin-bottom: 0.625rem;

  color: ${(props) => (props.isActive ? '#2D60FF' : '#B1B1B1')};
  text-decoration: none;
  &:hover {
    color: ${(props) => (props.isActive ? "#2D60FF" : "white")};
    background-color: ${(props) => (props.isActive ? '#fofofo' : 'grey')};
  }
`;

const ItemContainer = styled.div `
  display: flex;
  padding-left: 1.2rem;
  align-items: center;


`;

const LabelContainer = styled.div `
  padding-left: 2.813rem;
  display: flex;
  flex: 1;
  align-items: center;

  
`



const Sidebar = () => {

  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <SidebarContainer className="custom-scrollbar">
      <SidebarHeader>
        
        <img src={HomeIcon} alt="Home" />
        <LogoText>BankDash.</LogoText>
      </SidebarHeader>
      {DASHBOARD_SIDEBAR_LINKS.map((item) => (
        <SidebarLink
          key={item.key}
          to={item.path}
          onClick={() => handleLinkClick(item.path)}
          isActive={item.path === activeLink}
        >
        {item.path === activeLink ? 
        <ItemContainer>
          {item.Onicon}
        </ItemContainer>
        :
        <ItemContainer>
          {item.Officon}
        </ItemContainer>
        }


            
            <LabelContainer>
              <LabelText>{item.label}</LabelText>
            </LabelContainer>
        </SidebarLink>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

