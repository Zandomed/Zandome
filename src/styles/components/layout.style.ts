import styled, { css } from 'styled-components';

export const Main = styled.main<{ viewportHeight?: boolean }>`
   margin: 0 auto;
   padding: 3.5rem 1.0875rem 1.45rem;
   max-width: 960px;
   width: 100%;
   
   ${(props) =>
      props.viewportHeight &&
      css`
         min-height: 100%;
      `};
`;
