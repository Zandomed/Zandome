import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

export const ContainerLogo = styled.div`
   max-width: 250px;
   margin-bottom: 1.45rem;
   width: 250px;
`;

export const ContainerText = styled.div`
   margin-top: 2rem;

   > span {
      font-size: 25px;
      font-weight: bold;
   }
`;
