import React from 'react';
import PropTypes from 'prop-types';
import ItemNavbar from './item-navbar';
import { HeaderStyle as S } from '../styles';

type DataProps = {
   siteTitle: string;
};

const Header: React.FC<DataProps> = ({ siteTitle }) => {
   return (
      <S.Header>
         <S.WrapperHeader>
            <S.WrapperTitle to="/">
               <S.Title>{siteTitle}</S.Title>
            </S.WrapperTitle>
            <S.Navbar>
               <ItemNavbar title={'projects'} to={'/project'} />
               <ItemNavbar title={'about'} to={'/about'} />
            </S.Navbar>
         </S.WrapperHeader>
      </S.Header>
   );
};

Header.propTypes = {
   siteTitle: PropTypes.string.isRequired,
};

Header.defaultProps = {
   siteTitle: '',
};

export default Header;
