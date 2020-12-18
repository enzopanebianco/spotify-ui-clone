import styled from 'styled-components';

export const Container = styled.div`
    background:var(--primary);
    position:relative;
    height:auto;
    h2{
        color:white;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: -.04em;
        text-transform: none;
    }
    `;
export const Header = styled.header`
    width:100%;
    display:flex;
    height:60px;
    justify-content:center;
    top:0;
    position:sticky;
    z-index:3;
    background:transparent;
    article{
        width:98%;
        height:100%;
       
        display:flex;
        justify-content:space-between;
    }
    
`;
export const ControlHeader = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    width:8%;
  
    a{
        background:var(--aside);
        color:white;
        padding:0px;
        border-radius:50%;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor: pointer;
    }
`; 
export const ActionHeader = styled.div`
    width:29%;
   
    display:flex;
    justify-content:space-between;
    align-items:center;
    button{
        color:white;
        border-radius:50px;
        background-color: rgba(0,0,0,.7);
        border: 1px solid hsla(0,0%,100%,.7);
        letter-spacing:0.1em;
        font-size:12px;
        font-weight:bolder;
        padding:8px 34px;
        cursor: pointer;

    }
    button:hover{
        transform:scale(1.05);
        border-color:white;
    }
    a{
        background:black;
        color: white;
        font-weight:bolder;
        padding:0px 20px;
        border-radius:50px;
        cursor:pointer;
        display:flex;
        font-size:14px;
        align-items:center;
        justify-content:right;
        flex-direction:row;
    }
    span{
        margin-left:6px;
    }   
    div{
        margin-top:6px;
        margin-left:5px;
    }
    
`;
export const Content = styled.div`
    padding: 0px 11px;
    margin: 0;
    div:nth-child(1) h2{
        margin-top:10px;
    }
    article:nth-child(3) {
        margin-bottom:16vh;
       
    }
`;
export const Title = styled.div`
    width:97%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin: 0 auto;
    h2,p{
        cursor:pointer;
        font-weight:bolder;
    }
    h2{

    }
    p{
        color:var(--aside_text);
        font-size: 12px;
        line-height: 16px;
        letter-spacing: .1em;
    }
    h2:hover,p:hover{
        text-decoration:underline;
    }
    

`;
export const MusicOption =styled.article`
    display:flex;
    flex-direction:column;
    margin-top:10px;
    margin-bottom:10px;
   
`;
export const ListMusic = styled.div`
    margin-top:20px;
    display:flex;
    width:100%;
    align-items:center;

    div{
        margin-left:1.4%;
        width:13.5%;
    }
`;