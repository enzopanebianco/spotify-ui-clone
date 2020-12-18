import React from 'react';
import MusicImg from '../../assets/img/Tim1973.jpg';
// import { Container } from './styles';
import * as S from './styles';
import {FiRepeat,FiVolume1} from 'react-icons/fi';
import {IoIosShuffle} from 'react-icons/io';
import {MdBrandingWatermark,MdQueueMusic,MdPhonelink,
  MdPlayCircleOutline,MdSkipNext,MdSkipPrevious,MdFavoriteBorder} from 'react-icons/md';

const MusicMenu: React.FC = () => {
  return (
<>
<S.Container>
  <S.MusicBar>
    <S.Music>
      <img src={MusicImg} alt="musica tim maia" />
      <S.Title>
      <span>Reú Confesso</span>
      <p>Tim Maia</p>
      </S.Title>
      <a><MdFavoriteBorder size={20}/></a>
      <a><MdBrandingWatermark size={20} /></a>
    </S.Music>
    <S.MusicPlay>
      <S.ListIcon >
      <a><IoIosShuffle size={20}/></a>
      <a><MdSkipPrevious size={23}/></a>
      <a  className="play"><MdPlayCircleOutline size={35}/></a>
      <a><MdSkipNext size={23}/></a>
      <a><FiRepeat size={18}/></a>
      </S.ListIcon>
      <S.Bar>
        <p>0:32</p>
        <div></div>
        <p>4:37</p>
      </S.Bar>
    </S.MusicPlay>
    <S.MusicAction>
      <a><MdQueueMusic size={20}/></a>
      <a><MdPhonelink size={20}/></a>
      <a><FiVolume1 size={20}/></a>
      <div></div>
    </S.MusicAction>
  </S.MusicBar>
</S.Container>
</>

  );
}

export default MusicMenu;