import styled, { keyframes } from 'styled-components';
import { StyledLink, PageContainer } from './../../styled';

export const breathe = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
`;
export const shake = keyframes`
  0% {
    transform: translateX(0);
  }

  20% {
    transform: translateX(-10px);
  }

  40% {
    transform: translateX(10px);
  }

  60% {
    transform: translateX(-10px);
  }

  80% {
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0);
  }
`;

export const MedicationContainer = styled(PageContainer)`
  overflow: hidden;
`;

export const MedTitle = styled.h2`
  margin: 0.5rem;

`;
export const MedLink = styled(StyledLink)`
  color: ${props => props.theme.space};
`;

export const LandMass = styled.img`
  width: 100%;
  bottom: -35%;
  left: 0;
  position: absolute;
`;

export const Medication = styled.div`
  border-radius: 50%;
  width: ${props => props.size};
  height: ${props => props.size};
  background-color: yellow;
  box-shadow: 0 0 100px #f1da36, 0 0 60px #f2ad00, 0 0 10px #c96800, 0 0 120px #feff8f;
  animation: ${breathe} 10s ease infinite;
`;

export const MedicationCard = styled.figure`
  width: 80%;
  height: 70%;
  color: ${props => props.theme.space};
  background-color: #F5F4FF;
  border-radius: 6px;
  position: absolute;
  top: 10%;
  left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0.5rem;
  align-items: center;
  opacity: 0.93;
`;

export const Summary = styled.figcaption`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.2em;
`;

export const MedicationIcon = styled.img`
  border: 0;
  height: 30%;
  width: 30%;
  object-fit: cover;
`;

export const StarContainer = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StarCaption = styled.article`
  margin: 0.3em;
  text-align: center;
`;

export const CloseButton = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: cover;
  position: absolute;
  top: 8px;
  right: 8px;
`;
