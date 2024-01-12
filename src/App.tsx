import styled from 'styled-components';

import OuterContainer from './pages/OuterContainer';
import Header from './components/Header';
import colorTheme from './colorTheme';

interface WrapProps {
  $backgroundColor: string;
}

const App = (): JSX.Element => {
  return (
    <Wrap $backgroundColor={colorTheme.background}>
      <Header />
      <OuterContainer />
    </Wrap>
  );
};

export default App;

const Wrap = styled.div<WrapProps>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.$backgroundColor};
`;
