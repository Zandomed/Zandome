import React from 'react';
import PropTypes from 'prop-types';
import { TileProjectStyle as S } from '../styles';

export const TileProject: React.FC<any> = (props) => {
   return (
      <S.WrapperTileProject>
         <S.WrapperImage>
            <S.Image
               src="https://gillde.com/wp-content/uploads/2019/07/UI-Design-24-2.png"
               alt="Img"
            />
         </S.WrapperImage>
         <S.WrapperInfoProject>
            <S.InfoHeader>
               <S.Title>Title</S.Title>
               <S.Subtitle>subtitle</S.Subtitle>
            </S.InfoHeader>
            <S.InfoContent>
               <S.Description>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  perferendis repellat mollitia nisi doloribus assumenda a
                  velit, reiciendis porro cupiditate commodi, vitae officia aut
                  aliquam incidunt adipisci magni maiores sunt.
               </S.Description>
            </S.InfoContent>
            <div></div>
         </S.WrapperInfoProject>
      </S.WrapperTileProject>
   );
};

TileProject.propTypes = {};

export default TileProject;
