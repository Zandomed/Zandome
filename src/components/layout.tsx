import React, { Fragment, ReactNodeArray, useEffect, useState } from 'react';
import PropTypes, { ReactElementLike } from 'prop-types';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';
import {
   globalHistory,
   HistoryListenerParameter,
   HistoryLocation,
} from '@reach/router';

import Header from './header';
import Footer from './footer';

import { LayoutStyle as S } from '../styles';

type DataProps = {
   children: string | number | boolean | {} | ReactElementLike | ReactNodeArray;
};

const Layout: React.FC<DataProps> = ({ children }) => {
   const [showLayout, setShowLayout] = useState(false);
   const [urlPathActive, setUrlPathActive] = useState('/');
   // console.log(window.location);

   useEffect(() => {
      _toggleShowLayout(globalHistory.location);
      return globalHistory.listen((history: HistoryListenerParameter) =>
         _toggleShowLayout(history.location),
      );
   });

   const _toggleShowLayout = ({ pathname }: HistoryLocation): void => {
      setUrlPathActive(pathname);
      setShowLayout(pathname !== '/');
   };

   const data = useStaticQuery(graphql`
      query SiteTitleQuery {
         site {
            siteMetadata {
               title
            }
         }
      }
   `);

   const _getView = () => {
      if (showLayout) {
         return (
            <Fragment>
               <Header
                  siteTitle={data.site.siteMetadata?.title || `Title`}
                  urlActive={urlPathActive}
               />
               <S.Main>{children}</S.Main>
               <Footer />
            </Fragment>
         );
      } else {
         return <S.Main viewportHeight={true}>{children}</S.Main>;
      }
   };

   return _getView();
};

Layout.propTypes = {
   children: PropTypes.node.isRequired,
};

export default Layout;
