import React,{useEffect} from 'react';
import * as S from './styles';
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from 'react-icons/md';
import {IoMdArrowDropdown} from 'react-icons/io';
import Card from '../Card';


const Main: React.FC = () => {
  useEffect(()=>{
    function scroll(){
      window.addEventListener('scroll',setStyle);
      console.log(window.screenY);
    }
    scroll();
  },
  []);
  function setStyle():any{
    if(window.screenTop===0){
      return null
    }
   const header:any = document.getElementById('header');
    header.style.background='#080808';
    
  }
  return(
 <>
 <S.Container>
   <S.Header id="header">
     <article>
     <S.ControlHeader>
      <a><MdKeyboardArrowLeft size={33}/></a>
      <a><MdKeyboardArrowRight size={33}/></a>
     </S.ControlHeader>
     <S.ActionHeader>
      <button><span>FAÇA UPGRADE</span></button>
      <a><span>Enzo Panebian...</span>
      <div><IoMdArrowDropdown className="icon" size={23}/></div>
        </a>
     </S.ActionHeader>
     </article>
   </S.Header>
   <S.Content>
    <S.MusicOption>
   <S.Title>
    <h2><a>Atalhos</a></h2>
    <p>VER TUDO</p>
    </S.Title>
    <S.ListMusic>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </S.ListMusic>
    </S.MusicOption>
    <S.MusicOption>
   <S.Title>
    <h2><a>Tocado recentemente</a></h2>
    <p>VER TUDO</p>
    </S.Title>
    <S.ListMusic>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </S.ListMusic>
    </S.MusicOption>
    <S.MusicOption>
   <S.Title>
    <h2><a>Para fãs de Tim Maia</a></h2>
    <p>VER TUDO</p>
    </S.Title>
    <S.ListMusic>
      <Card />
      <Card />
      <Card />
      <Card />
    </S.ListMusic>
    </S.MusicOption>
    </S.Content>
 </S.Container>
  </>
  );
}
export default Main;