import styled from 'styled-components';

import SideNav from '../components/SideNav';
import MainContainer from './MainContainer';

const OuterContainer = (): JSX.Element => {
  //TODO: here would be the tab navigation implemented
  return (
    <Wrap>
      <SideNav />
      <MainContainer />
    </Wrap>
  );
};
export default OuterContainer;

const Wrap = styled.div`
  display: flex;
  position: relative;

  border: 1px solid green;
`;
