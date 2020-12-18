import styled from 'styled-components';

export const Container = styled.div`
  background:var(--aside);
  position:fixed;
  z-index:1;
  left:0;
  height:100vh;
  display:flex;
  align-items:center;
  flex-direction:column;
  width:max(230px,10%);

`;
export const Title = styled.div`
height:90px;
display:flex;
align-items:center;

img{
  margin-right:45px;
  width:128px;
}
`;
export const MenuList = styled.div`
 display:flex;
  flex-direction:column;
  height: calc(100% - 180px);
  
  width:100%;
`;
export const ListAction = styled.div`
  width:99%;
  font-size:14px;
  font-weight:bold;
  color:var(--aside_text);
  ul{
    list-style:none;
  }
 .marked{
   background:var(--card);
   color:white;
 }
  
  li{
    padding:0 8px;
    margin-bottom:10px;
   
  }
  li a{
  padding:7px 20px;
  cursor:pointer;
  border-radius:4px;
  display:flex;
  align-items:center;
  transition:0.3s ease;
  }
  li a span{
    margin-left:12px;
  }
  li a:hover{
    color:white;
  }
  li a:focus{
    background:var(--card);
  }
  
`;
export const Playlist = styled.div`
  display:flex;
  flex-direction:column;
  
  h3{
    color:var(--aside_text);
    font-size:12px;
    letter-spacing:.1em;
    margin: 10px 30px 5px;
    font-weight:bolder;
  }
`;
export const PlaylistAction = styled.div`
  
   
    margin: 0 auto;
    list-style:none;
  
    li a{
      padding: 8px 0px;
      width:100%;
      color:white;
      display:flex;
      align-items:center;
    
     
    }
    li:nth-child(1) div{
      opacity:0.8;
      color:black;
      background:white;
      height:100%;
      padding:4px;
      display:flex;
      align-items:center;
    }
    li:nth-child(2) div{
      background: linear-gradient(135deg,#450af5,#c4efd9);
      height:100%;
      padding:7px;
      fill:white;
      display:flex;
      align-items:center;
      opacity:0.8;
    }
    li:hover div{
      opacity:1;
      transform:0.3s ease;
    }
    li:hover span{
      color:white;
      transform:0.3s ease;

    }
    li a span{
      color:var(--aside_text);
      line-height:16px;
      font-size:14px;
      font-weight:bold;
      padding:0px 16px 0px 0px;
      margin-left:10px;
      text-align:center;
    }
    li a:hover{
      color:white;
      transition:0.3s ease;
      cursor:pointer;
    }
    .divisor{
      background-color:var(--card);
      height:0.5px;
    }
`;
export const List = styled.div`
  color:var(--aside_text);
  margin-top:10px;
  li{
    padding:0px 24px;
  }
  li div{
    padding:5px;
  }
  li span{
    font-size:14px;
    font-weight:normal;
  }
  li div:hover{
      color:white;
      transition:0.3s ease;
     }
`;
export const InstallApp = styled.div`
  background:#000;
  color:var(--aside_text);
  font-weight:bold;
  font-size:13px;
  height:50px;
  display:flex;
  align-items:center;
  position: absolute;
  bottom: 90px;
  width:100%;
  z-index:2;
 a{
  display:flex;
  align-items:center;
 padding:0px 20px 0px 36px
 }
 span{
  margin-left:15px;
 }
 a:hover{
   color:white;
   transition:0.3s ease;
   cursor:pointer;
   }
`;