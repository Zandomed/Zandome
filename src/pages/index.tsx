import React, { Fragment } from 'react';
import { PageProps } from 'gatsby';
import SEO from '../components/seo';
import { IndexStyle as S, FooterStyle as FS } from '../styles';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

//@ts-ignored
import ZandomeLogo from '../images/zandome.svg';

const IndexPage: React.FC<PageProps<void>> = () => {
   const listRRSS = [
      {
         icon: faGithub,
         url: 'https://github.com/Zandomed',
      },

      {
         icon: faInstagram,
         url: 'https://www.instagram.com/_zandome/',
      },
      {
         icon: faEnvelope,
         url: 'mailto:support@zandome.com',
      },
   ];
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
               {listRRSS.map((RRSS, i: number) => (
                  <FS.LinkRefRRSS key={i} href={RRSS.url} target="_blank">
                     <FS.IconRRSS icon={RRSS.icon} />
                  </FS.LinkRefRRSS>
               ))}
            </S.WrapperRRSS>
         </S.Container>
      </Fragment>
   );
};

export default IndexPage;
