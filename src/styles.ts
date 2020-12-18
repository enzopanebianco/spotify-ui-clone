import styled from "styled-components";

export const Container = styled.div`
  
`;
export const TopMenu = styled.div`
      display:flex;
      width:100%;
  
      >:nth-child(2){
         
          width:min(100% - 230px );
          left:max(230px,10%)
      }
`;
export const BottomMenu = styled.div`
    z-index:2;
    position:fixed;
    bottom:0;
    width:100%;
  
`;