import React from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import MusicMenu from './components/MusicMenu';

import GlobalStyle from './styles/GlobalStyle';

import * as S from './styles';
function App() {
  return (
   <>
      <GlobalStyle />
    <S.Container>
      
      <S.TopMenu>
        <Sidebar />
        <Main />
      </S.TopMenu>
      
      <S.BottomMenu>
        <MusicMenu />
      </S.BottomMenu>
    
    </S.Container>
   </>
  );
}

export default App;
