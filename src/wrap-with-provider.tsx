import { PageProps } from 'gatsby';
import React, { Fragment } from 'react';
import Layout from './components/layout';
import { GlobalStyles } from './styles/global-styles';

const WrapWithProvider = ({ children }) => {
   return (
      <Fragment>
         <GlobalStyles />
         <Layout children={children} />
         {/* {children} */}
      </Fragment>
   );
};
export { WrapWithProvider };
