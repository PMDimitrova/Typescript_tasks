import styled from 'styled-components';

import colorTheme from '../colorTheme';

interface WrapProps {
  $backgroundColor: string;
}

const SideNav = (): JSX.Element => {
  //TODO: use ul & li elements
  return <Wrap $backgroundColor={colorTheme.background}>side nav</Wrap>;
};

export default SideNav;

const Wrap = styled.div<WrapProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  z-index: 100;
  top: 0;
  bottom: 0;
  padding: 0 16px;
  background-color: ${props => props.$backgroundColor};
  font-weight: 900;

  border: 1px solid blue;
`;
