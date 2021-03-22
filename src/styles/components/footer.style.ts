import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Footer = styled.footer`
   margin-top: auto;

   background-color: rgba(0, 0, 0, 0.5);
`;

export const WrapperContent = styled.div`
   margin: 35px auto;
   max-width: 960px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const WrapperCopyright = styled.div``;

export const CopyrightText = styled.span``;

export const WrapperRRSS = styled.div`
   margin: 0 20px;
`;

export const LinkRefRRSS = styled.a`
   color: white;
   text-decoration: none;
   cursor: pointer;
   transition: color 250ms ease-in-out;
   &:hover {
      color: #00a0af;
   }

   &:not(:last-child) {
      margin-right: 15px;
   }
`;

export const IconRRSS = styled(FontAwesomeIcon)`
   font-size: 25px;
`;
