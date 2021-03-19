import { Link } from 'gatsby';
import styled from 'styled-components';

export const Header = styled.header`
   background-color: rgba(0, 0, 0, 0.5);
   margin-bottom: 1.45rem;
`;

export const WrapperHeader = styled.div`
   margin: 0 auto;
   max-width: 960px;
   padding: 1.45rem 1.0875rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const WrapperTitle = styled(Link)`
   margin: 0;
   text-decoration: none;
   color: white;
`;

export const Title = styled.h1`
   margin: 0;
`;

export const Navbar = styled.nav`
   display: flex;
`;
