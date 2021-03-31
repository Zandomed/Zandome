import styled, { keyframes } from 'styled-components';

const ADrawStrokeLogoZandome = keyframes`
   0% {
      stroke-opacity: 0;
   }
   25% {
      stroke-opacity: 1;
   }
   90% {
     stroke-width: 6px;
   }
   100% {
     stroke-dashoffset: 0;
     stroke-opacity:1;
     stroke-width: 4px;

   }
`;

const AColorFillLogoZandome = keyframes`
   to{
      fill-opacity: 1;
      stroke-width: 1px;
      stroke-opacity: 0;
   }
`;

const AFadeLoadingText = keyframes`

   from{
      opacity: 0;
   }

   to{
      opacity: 1;
   }
`;

const ABlinkDotLoadingText = keyframes`
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

export const Container = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   z-index: 5;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

export const WrapperLogo = styled.div`
   max-width: 200px;
   margin-bottom: 1.45rem;

   path {
      fill-opacity: 0;
      stroke-width: 6px;
      stroke: #cbcbcb;
      stroke-opacity: 1;
      stroke-dasharray: 1000;
      stroke-dashoffset: 1300;
      /* transition: all; */

      animation: ${ADrawStrokeLogoZandome} 3.5s linear 700ms both,
      ${AColorFillLogoZandome} 3s ease-out 2.5s both;
   }
`;

export const WrapperText = styled.div`
   margin-top: 2rem;

   > span {
      font-size: 25px;
      font-weight: bold;
      user-select: none;
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      animation: ${AFadeLoadingText} 2s ease 700ms both;
   }
`;

export const Dot = styled.span`
   font-size: 30px;
   margin: 0 2px;
   animation-name: ${ABlinkDotLoadingText};
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

export const WrapperRRSS = styled.div`
   margin: 30px 0 0;
   display: flex;
   justify-content: center;
   align-items: center;
   animation: ${AFadeLoadingText} 2s ease 700ms both;
`;
