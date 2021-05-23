import { PageProps } from 'gatsby';
import React, { Fragment } from 'react';
import Layout from './components/layout';
import { GlobalStyles } from './styles/global-styles';
import { config } from './utils/config';
const WrapWithProvider = ({ children }) => {
   console.info(config.VERSION);
   return (
      <Fragment>
         <GlobalStyles />
         <Layout children={children} />
         {/* {children} */}
      </Fragment>
   );
};
export { WrapWithProvider };
