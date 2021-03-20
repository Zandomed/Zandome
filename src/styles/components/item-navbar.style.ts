import styled, { css } from 'styled-components';

export const SvgElement = styled.svg.attrs({
   height: '100%',
   width: '100%',
   xmlns: 'http://www.w3.org/2000/svg',
})`
   width: 100%;
   height: 100%;
`;

export const RectElement = styled.rect.attrs({
   x: '5',
   y: '5',
   rx: '5',
})`
   height: 32px;
   width: ${(props) =>
      props.width ? 'calc(' + props.width + ' - 10px)' : '90%'};
   stroke-dasharray: 40 230;
   stroke-dashoffset: -153;
   stroke-width: 2.5px;
   fill: transparent;
   border-radius: 20px;
   stroke: url(#gradient);
   transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
`;

export const LinearGradient = styled.linearGradient.attrs({
   id: 'gradient',
   gradientUnits: 'userSpaceOnUse',
   x1: '52.4396',
   y1: '100.1121',
   x2: '247.4757',
   y2: '25.1088',
})``;

export const LinearGradientStop = styled.stop`
   stop-color: ${(props) => props.color};
`;

export const ForeignObjectElement = styled.foreignObject.attrs({
   x: '0',
   y: '0',
})`
   height: 100%;
   width: 100%;
`;

export const WrapperText = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0px;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const Text = styled.span`
   font-size: 14px;
   font-weight: 600;
   text-transform: uppercase;
   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
   // color: white;
   -webkit-transition: text-shadow 600ms ease;
   -moz-transition: text-shadow 600ms ease;
   -o-transition: text-shadow 600ms ease;
   transition: text-shadow 600ms ease;
   color: white;
`;

export const WrapperItemNavbar = styled.div<{ active: boolean }>`
   flex-grow: 1;
   width: 112px;
   height: 40px;
   position: relative;

   &:hover {
      ${RectElement} {
         stroke-width: 3px;
         stroke-dashoffset: 0;
         stroke-dasharray: 257;
      }

      ${WrapperText} {
         cursor: pointer;
      }
   }

   ${(props) =>
      props.active &&
      css`
         ${RectElement} {
            stroke-width: 3px;
            stroke-dashoffset: 0;
            stroke-dasharray: 260;
         }
      `}

   &:not(:last-child) {
      margin-right: 1em;
   }
`;

// export const ItemNavbarStyle = styled.div`
//    &:hover {
//       .text {
//          cursor: pointer;
//       }
//    }

//    &.inverted {
//       .shape {
//          stroke: none;
//          fill: url(#gradient);
//       }

//       .text > span {
//          color: white;
//       }

//       &:hover {
//          .text {
//             > a {
//                text-shadow: 0px 3px 15px #212121;
//                // color: #212121 !important;
//             }
//          }
//       }
//    }

//    &.active .shape {
//       stroke-width: 3px;
//       stroke-dashoffset: 0;
//       stroke-dasharray: 260;
//    }
// `;
