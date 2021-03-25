import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   z-index: 5;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

export const ContainerLogo = styled.div`
   max-width: 200px;
   margin-bottom: 1.45rem;
`;

export const ContainerText = styled.div`
   margin-top: 2rem;

   > span {
      font-size: 25px;
      font-weight: bold;
      user-select: none;
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
   }
`;

const blink = keyframes`
   0% {
      opacity: .2;
   }
   20% {
      opacity: 1;
   }
   100% {
      opacity: .2;
   }
`;

export const Dot = styled.span`
   font-size: 30px;
   margin: 0 2px;
   animation-name: ${blink};
   animation-duration: 1.4s;
   animation-iteration-count: infinite;
   animation-fill-mode: both;

   &:nth-child(2) {
      animation-delay: 0.2s;
   }

   &:nth-child(3) {
      animation-delay: 0.4s;
   }
`;
