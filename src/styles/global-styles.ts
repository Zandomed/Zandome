import { css, createGlobalStyle } from 'styled-components';
import { FontFamily } from './font-family';

const size = {
   mobileS: '320px',
   mobileM: '375px',
   mobileL: '425px',
   tablet: '768px',
   laptop: '1024px',
   laptopL: '1440px',
   desktop: '2560px',
};

export const device = {
   mobileS: `(min-width: ${size.mobileS})`,
   mobileM: `(min-width: ${size.mobileM})`,
   mobileL: `(min-width: ${size.mobileL})`,
   tablet: `(min-width: ${size.tablet})`,
   laptop: `(min-width: ${size.laptop})`,
   laptopL: `(min-width: ${size.laptopL})`,
   desktop: `(min-width: ${size.desktop})`,
   desktopL: `(min-width: ${size.desktop})`,
};

const stylesGlobals = css`
   // Import FontFace
   ${FontFamily}

   html {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      font: 112.5%/1.45em 'Poppins', georgia, serif, sans-serif;
      box-sizing: border-box;
      overflow-y: auto;
      height: 100vh;
      background-color: #121212;
   }

   body {
      margin: 0;
      width: 100%;
      height: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #fff;
      font-family: 'Poppins', georgia, serif;
      font-weight: normal;
      word-wrap: break-word;
      font-kerning: normal;
      -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      background-color: #121212;
   }

   #___gatsby {
      height: 100%;
      #gatsby-focus-wrapper {
         height: 100%;
      }
   }

   main {
      height: 100%;
      width: 100%;
   }
   /* 
   *::-webkit-scrollbar,
*::-webkit-scrollbar-thumb {
  width: 26px;
  border-radius: 13px;
  background-clip: padding-box;
  border: 10px solid transparent;
}

*::-webkit-scrollbar-thumb {        
  box-shadow: inset 0 0 0 10px;
} */

   /* *::-webkit-scrollbar-button:start:decrement,
   *::-webkit-scrollbar-button:end:increment {
      height: 5px;
      display: block;
   } */

   /* * {
      scrollbar-color: #999 transparent;
   } */
`;
export const GlobalStyles = createGlobalStyle`${stylesGlobals}`;
