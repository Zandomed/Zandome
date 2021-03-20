import React, { Fragment } from 'react';
import { PageProps } from 'gatsby';
import SEO from '../components/seo';
import { IndexStyle as S } from '../styles';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage: React.FC<PageProps<void>> = () => (
   <Fragment>
      <SEO title="Home" />
      <S.Container>
         <S.ContainerLogo>
            <StaticImage
               src="../images/zandome.png"
               alt="Zandome"
               placeholder="tracedSVG"
               width={250}
            />
         </S.ContainerLogo>
         <S.ContainerText>
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

export default IndexPage;
