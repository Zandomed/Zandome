import { Link } from 'gatsby';
import React from 'react';
import { ItemNavbarStyle as S } from '../styles';
import PropTypes from 'prop-types';
type DataProps = {
   title: string;
   to: string;
   active?: boolean;
   // width?: string;
};

const ItemNavbar: React.FC<DataProps> = ({ title, to, active = false }) => {
   const gradientColors = [
      {
         offset: '0',
         color: '#007297',
      },
      {
         offset: '0.4133',
         color: '#00A0AF',
      },
      {
         offset: '0.895',
         color: '#1DCAD3',
      },
   ];

   return (
      <S.WrapperItemNavbar active={active}>
         <S.SvgElement>
            <defs>
               <S.LinearGradient>
                  {gradientColors.map((stop, i: number) => (
                     <S.LinearGradientStop key={i} {...stop} />
                  ))}
               </S.LinearGradient>
            </defs>
            <S.RectElement />
            <S.ForeignObjectElement />
         </S.SvgElement>
         <Link to={to}>
            <S.WrapperText>
               <S.Text>{title}</S.Text>
            </S.WrapperText>
         </Link>
      </S.WrapperItemNavbar>
   );
};

ItemNavbar.propTypes = {
   title: PropTypes.string.isRequired,
   to: PropTypes.string.isRequired,
   active: PropTypes.bool,
};

ItemNavbar.defaultProps = {
   active: false,
};

export default ItemNavbar;
