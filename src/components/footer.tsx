import React from 'react';
import { FooterStyle as S } from '../styles';
import SocialNetworks from './social-networks';
export const Footer: React.FC<any> = () => {
   return (
      <S.Footer>
         <S.WrapperContent>
            <S.WrapperCopyright>
               <S.CopyrightText>
                  © {new Date().getFullYear()}. Zandome
               </S.CopyrightText>
            </S.WrapperCopyright>
            <SocialNetworks />
         </S.WrapperContent>
      </S.Footer>
   );
};

Footer.propTypes = {};

export default Footer;
