import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html,body,#root{
        
        max-width:100vw;
        height:100%;
        width:100%;
        background-color:var(--primary);

        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        
    }
    #root{
        --primary:#121212;
        --aside:#030303;
        --card:#282828;
        --green:#1db954;
        --music_title:#f4f4f4;
        --description:#767676;
        --minute:#505050;
        --aside_text:#b3b3b3;
    }
    h1{
        color:var(--music_title);
    }
  
`;
  
