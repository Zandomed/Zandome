import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const WrapperRRSS = styled.div`
   margin: 0;
`;

export const LinkRefRRSS = styled.a`
   color: white;
   text-decoration: none;
   cursor: pointer;
   transition: color 250ms ease-in-out;
   &:hover {
      color: #007297;
   }

   &:not(:last-child) {
      margin-right: 15px;
   }
`;

export const IconRRSS = styled(FontAwesomeIcon)`
   font-size: 25px;
`;
