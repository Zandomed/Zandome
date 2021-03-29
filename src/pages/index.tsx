import React, { Fragment, useEffect, useRef, useState } from 'react';
import { PageProps } from 'gatsby';
import SEO from '../components/seo';
import { IndexStyle as S } from '../styles';
//@ts-ignored
import ZandomeLogo from '../images/zandome.svg';

const IndexPage: React.FC<PageProps<void>> = () => {

   return (
      <Fragment>
         <SEO title="Home" />
         <S.Container id="container">
            <S.ContainerLogo id="containerLogo">
               <ZandomeLogo width="100%" height="100%" />
            </S.ContainerLogo>
            <S.ContainerText id="loading">
               <span>
                  Comming Soon
                  <S.Dot>.</S.Dot>
                  <S.Dot>.</S.Dot>
                  <S.Dot>.</S.Dot>
               </span>
            </S.ContainerText>
         </S.Container>
      </Fragment>
   );
};

export default IndexPage;
