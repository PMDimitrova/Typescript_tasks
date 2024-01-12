import styled from 'styled-components';

import colorTheme from '../colorTheme';

interface WrapProps {
  $backgroundColor: string;
  $fontColor: string;
}

const Header = (): JSX.Element => {
  return (
    <Wrap $backgroundColor={colorTheme.background} $fontColor={colorTheme.textDark}>
      Trivia time!
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div<WrapProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 999;
  top: 0;
  height: 40px;
  padding: 0 16px;
  background-color: ${props => props.$backgroundColor};
  font-weight: 900;
  font-size: 22px;
  color: ${props => props.$fontColor};
  user-select: none;

  border: 1px solid orange;
`;
