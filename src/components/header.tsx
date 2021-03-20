import React from 'react';
import PropTypes from 'prop-types';
import ItemNavbar from './item-navbar';
import { HeaderStyle as S } from '../styles';

type DataProps = {
   siteTitle: string;
   urlActive: string;
};

const Header: React.FC<DataProps> = ({ siteTitle, urlActive }) => {
   const isActiveItemNavbar = (expresionRegExp: RegExp) => {
      const result = urlActive.match(expresionRegExp);
      return result ? result.length > 0 : false;
   };

   return (
      <S.Header>
         <S.WrapperHeader>
            <S.WrapperTitle to="/">
               <S.Title>{siteTitle}</S.Title>
            </S.WrapperTitle>
            <S.Navbar>
               <ItemNavbar
                  title={'projects'}
                  to={'/projects'}
                  active={isActiveItemNavbar(
                     new RegExp(/projects(\/.*)*/, 'gm'),
                  )}
               />
               <ItemNavbar
                  title={'about'}
                  to={'/about'}
                  active={isActiveItemNavbar(new RegExp(/about(\/.*)*/, 'gm'))}
               />
            </S.Navbar>
         </S.WrapperHeader>
      </S.Header>
   );
};

Header.propTypes = {
   siteTitle: PropTypes.string.isRequired,
   urlActive: PropTypes.string.isRequired,
};

Header.defaultProps = {
   siteTitle: '',
   urlActive: '/',
};

export default Header;
