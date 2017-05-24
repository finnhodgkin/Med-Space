import styled from 'styled-components';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export const AppWrapper = styled.div`
  background-color: #052136;
  color: ${props => props.theme.colorPrimary};
  height: 100%;
  display: flex;
  align-items: center;
`;
export const Transition = styled(CSSTransitionGroup)`
  width: 100%;
  height: 100%;
`;
