import styled from 'styled-components';
import { useState } from 'react';

import MainContainer from './MainContainer';
import ToLearnPage from './ToLearnPage';
import colorTheme from '../colorTheme';
import TriviaPage from './TriviaPage';

interface ISideNav {
  $backgroundColor: string;
  $fontColor: string;
}

interface INavButton {
  $borderColor: string;
}

const OuterContainer = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState<number>(1); //using 1 because we want the first tab, e.g. the home page, to be open

  const changeTab = (desiredTab: 1 | 2 | 3) => {
    setCurrentTab(desiredTab);
  };

  return (
    <Wrap>
      <SideNav $backgroundColor={colorTheme.background} $fontColor={colorTheme.textDark}>
        <NavButton onClick={() => changeTab(1)} $borderColor={colorTheme.textLight}>
          Home
        </NavButton>
        <NavButton onClick={() => changeTab(2)} $borderColor={colorTheme.textLight}>
          Trivia
        </NavButton>
        <NavButton onClick={() => changeTab(3)} $borderColor={colorTheme.textLight}>
          For Later
        </NavButton>
      </SideNav>

      {currentTab === 1 && <MainContainer />}

      {currentTab === 2 && <TriviaPage />}

      {currentTab === 3 && <ToLearnPage />}
    </Wrap>
  );
};
export default OuterContainer;

const Wrap = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  border: 1px solid green;
`;

const SideNav = styled.div<ISideNav>`
  display: flex;
  flex-direction: column;
  position: sticky;
  z-index: 100;
  top: 0;
  bottom: 0;
  padding: 0 8px;
  background-color: ${props => props.$backgroundColor};
  color: ${props => props.$fontColor};
  font-weight: 900;
  border: 1px solid blue; //todo: change color and shape
`;

const NavButton = styled.div<INavButton>`
  display: flex;
  justify-content: center;
  width: 80px;
  margin: 16px 0;
  padding: 8px;
  border: 1px solid;
  border-radius: 4px;
  border-color: ${props => props.$borderColor};
  cursor: pointer;
  user-select: none;
`;
