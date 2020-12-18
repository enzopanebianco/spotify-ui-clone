import styled from 'styled-components';

export const Container = styled.div`
    height:90px;
    background:var(--card);
    border-top:1px solid black;
    display:flex;
    justify-content:center;
`;
export const MusicBar = styled.div`
    width:99%;

    display:flex;
    justify-content:space-between;
    align-items:center;
    height:100%;
`;
export const Music = styled.div`
    width:17%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:space-around;
    img{
        width:22%;
        height:auto;
    }
    color:var(--aside_text);
    a{
        cursor:pointer;
    }
`;
export const Title = styled.div`
    display:flex;
    flex-direction:column;
    padding:4px;
    span{
        color:white;
        font-size:14px;
    }
    p{
        color:var(--aside_text);
        font-size:12px;
    }
`;
export const MusicPlay = styled.div`
    width:40%;
    height:100%;
    margin-right:5%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;
export const ListIcon = styled.div`
    padding:4px 5px;
    color:var(--aside_text);
    display:flex;
    align-items:center;
    a{
        padding:0px 10px 0px 10px;
    }
    a:hover{
        color:white;
        transform:0.3s ease;
    }
   .play:hover{
      transform:scale(1.1);
    }
`;
export const Bar = styled.div`
    display:flex;
    width:100%;
    align-items:center;
    justify-content:space-between;
    div{
        width:90%;
        background:#555;
        border-radius:4px;
        height:4px;
    }
    p{
        font-size:11px;
        color:var(--aside_text);
    }
`;
export const MusicAction = styled.div`
    width: 12%;
    height:100%;
    display:flex;
    align-items:center;
    color:var(--aside_text);
    justify-content:space-around;
    div{
        height:4px;
        background:#555;
        width:40%;
        border-radius:4px;
    }
    a:hover{
        color:white;
        transform:0.3s ease;
    }
`;