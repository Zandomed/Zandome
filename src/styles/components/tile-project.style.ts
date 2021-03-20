import styled from 'styled-components';

export const WrapperImage = styled.div`
   margin: 0 20px;
   height: 100%;
`;

export const Image = styled.img`
   width: 200px;
   border-radius: 20px;
   height: 100%;
`;

export const WrapperInfoProject = styled.div``;

export const InfoHeader = styled.div``;

export const Title = styled.h5`
   margin: 0;
   font-weight: bold;
   font-size: 22px;
`;

export const Subtitle = styled.span`
   margin: 0;
   font-style: italic;
   font-size: 14px;
`;

export const InfoContent = styled.div``;

export const Description = styled.p`
   text-align: justify;
   margin: 0;
`;

export const WrapperTileProject = styled.div`
   display: flex;
   align-items: center;
   height: 100%;
   margin-bottom: 20px;
   background-color: rgba(55, 55, 55, 0.5);
   border-radius: 20px;
   padding: 35px;

   &:nth-child(2n) ${WrapperImage} {
      order: 2;
   }
   &:last-child {
      margin: 0;
   }
`;
