import React from 'react';
import * as S from './styles';
import logo from '../../assets/img/spotify-logo-branca-white.png';
import {AiFillHome,AiOutlinePlus} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs';
import {MdLibraryMusic,MdFavorite} from 'react-icons/md';
import {IoMdDownload} from 'react-icons/io';

const Sidebar: React.FC = () => {
  return(
  <>
  <S.Container>
    <S.Title>
    <img src={logo} alt="logo da empresa" />
  </S.Title>
    <S.MenuList>
    <S.ListAction>
      <ul>
        <li>
          <a className="marked"><AiFillHome size={23}/><span>Início</span></a>
        </li>
        <li>
          <a><BsSearch size={23} /><span>Buscar</span></a>
        </li>
        <li>
          <a><MdLibraryMusic size={23} /><span>Sua Biblioteca</span></a>
        </li>
      </ul>
    </S.ListAction>
    <S.Playlist>
      <h3>PLAYLISTS</h3>
      <S.PlaylistAction>
      
          <li>
            <a><div><AiOutlinePlus size={23}/></div><span>Criar playlist</span></a>
          </li>
          <li>
            <a><div><MdFavorite  size={17} /></div>
            <span>Músicas Curtidas</span></a>
          </li>
        <div className="divisor"></div>
      </S.PlaylistAction>
      <S.List>
        <ul>
          <li><div><span>Rap Lançamentos 2020</span></div></li>
          <li><div><span>É eu não sei meu</span></div></li>
          <li><div><span>trap</span></div></li>
          <li><div><span>Pagode Bala</span></div></li>
          <li><div><span>Playlistizinha</span></div></li>
        </ul>
      </S.List>
      <S.InstallApp>
        <a><IoMdDownload size={23} /><span>Instalar aplicativo</span></a>
      </S.InstallApp>
    </S.Playlist>
  </S.MenuList>
  </S.Container>
  </>
  
);
}

export default Sidebar;