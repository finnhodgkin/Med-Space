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
export const glow = keyframes`
  0% {
  box-shadow: 0 0 100px #f1da36, 0 0 60px #f2ad00, 0 0 10px #c96800, 0 0 120px #feff8f;
  }
  50% {
  box-shadow: 0 0 150px #f1da36, 0 0 100px #f2ad00, 0 0 50px #c96800, 0 0 200px #feff8f;
  }
  100% {
  box-shadow: 0 0 100px #f1da36, 0 0 60px #f2ad00, 0 0 10px #c96800, 0 0 120px #feff8f;
  }

`;

export const landmass = keyframes`
  0% {
    transform: translateY(100em);
  }
  100% {
    transform: translateY(0em);
  }
`;

export const Chevron = styled.img`
  position: absolute;
  top: 15%;
  left: ${props => (props.right ? props.right : props.left)};
  width: 3em;
  height: 3em;
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

export const SeeMore = styled(StyledLink)`
  width: auto;
  height: 3em;
  border: 2px solid ${props => props.theme.space};
  border-radius: 5px;
  padding: .5rem;
  padding-right: 2em;
  padding-left: 2em;
  color: ${props => props.theme.space};
  margin-bottom: 0.3rem;
`;

export const LandMass = styled.img`
  animation: ${landmass} 1.5s ease;
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
  animation: ${glow} 4s ease infinite;
`;

export const MedicationCard = styled.figure`
  z-index: 3;
  width: 90%;
  top: 5%;
  left: 5%;
  height: 85%;
  color: ${props => props.theme.space};
  background-color: #F5F4FF;
  border-radius: 6px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 0.5rem;
  align-items: center;
  opacity: 0.96;
`;

export const MedCardIcons = styled.div`
  width: 100%;
  height: 30%;
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
  height: 8rem;
  width: 8rem;
  object-fit: cover;
`;

export const DetailsContainer = styled.div`
  height: 50%;
`;

export const Astronaut = styled.img`
  animation: ${landmass} 1.5s ease;
  height: 5rem;
  width: 5rem;
  bottom: 15%;
  left: 38%;
  z-index: 1;
  position: absolute;
`;

export const StarContainer = styled.div`
  color: #90cdff;
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
