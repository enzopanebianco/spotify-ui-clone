import styled from 'styled-components';

export const Container = styled.div`
    background:var(--card);
    border-radius:7px;
    height:250px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    padding: 0 20px;
    position:relative;
    cursor:pointer;
    :hover button{
        opacity:1;
    }
`;
export const Image = styled.img`
    width:100%;
    height:auto;
    margin-top:5px;
`;
export const Title = styled.h3`
    color:var(--music_title);
    font-size:16px;
    margin-top:6px;
`;
export const Description = styled.p`
    font-size:11px;
    color:var(--aside_text);
    width:65%;
    font-weight:500;
`;
export const ButtonPlay = styled.button`
    position:absolute;
    bottom:10px;
    right:10px;
    background:var(--green);
    color:white;
    border-radius:50px;
    border:none;
    padding: 10px;
    outline:none;
    display:flex;
    align-items:center;
    box-shadow: 1px 1px 0px #222;
    opacity:0;
    :hover{
        transition:0.3s ease;
        transform:scale(1.05);
    }
`;