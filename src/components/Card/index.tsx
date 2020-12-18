import React from 'react';
import * as S from './styles';
import TimMaia from '../../assets/img/Tim1973.jpg';
import {MdPlayArrow} from 'react-icons/md';

const Card: React.FC = () => {
  return (
      <>
        <S.Container>
            <S.Image src={TimMaia} />
            <S.Title>
                Réu Confesso
            </S.Title>
            <S.Description>
            Tim Maia
            </S.Description>
            <S.ButtonPlay>
                <MdPlayArrow size={23}/>
            </S.ButtonPlay>
        </S.Container>
      </>
  );
}

export default Card;