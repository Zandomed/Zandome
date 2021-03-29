import React from 'react';
import PropTypes from 'prop-types';
import { FooterStyle as S } from '../styles';
import {
   faGithub,
   faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export const Footer: React.FC<any> = (props) => {
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
         url: 'mailto:contact@zandome.com',
      },
   ];

   return (
      <S.Footer>
         <S.WrapperContent>
            <S.WrapperCopyright>
               <S.CopyrightText>
                  © {new Date().getFullYear()}. Zandome
               </S.CopyrightText>
            </S.WrapperCopyright>
            <S.WrapperRRSS>
               {listRRSS.map((RRSS, i: number) => (
                  <S.LinkRefRRSS key={i} href={RRSS.url} target="_blank">
                     <S.IconRRSS icon={RRSS.icon} />
                  </S.LinkRefRRSS>
               ))}
            </S.WrapperRRSS>
         </S.WrapperContent>
      </S.Footer>
   );
};

Footer.propTypes = {};

export default Footer;
