import React, { Fragment } from 'react';
import { PageProps } from 'gatsby';

import SEO from '../components/seo';
import SocialNetworks from '../components/social-networks';
import { IndexStyle as S } from '../styles/index';

//@ts-ignored
import ZandomeLogo from '../images/zandome.svg';

const IndexPage: React.FC<PageProps<void>> = () => {
   return (
      <Fragment>
         <SEO title="Home" />
         <S.Container id="container">
            <S.WrapperLogo id="containerLogo">
               <ZandomeLogo width="100%" height="100%" />
            </S.WrapperLogo>
            <S.WrapperText id="loading">
               <span>
                  Comming Soon
                  <S.Dot>.</S.Dot>
                  <S.Dot>.</S.Dot>
                  <S.Dot>.</S.Dot>
               </span>
            </S.WrapperText>
            <S.WrapperRRSS>
               <SocialNetworks />
            </S.WrapperRRSS>
         </S.Container>
      </Fragment>
   );
};

export default IndexPage;
