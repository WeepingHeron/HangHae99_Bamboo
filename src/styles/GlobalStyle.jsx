import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Noto Sans KR', sans-serif;
        margin: 0;
    }

    ul, li, p, h1, h2, h3, button {
        margin: 0;
        padding: 0;    
    }

    input, button {
        border: none;
    }

    ul {
        list-style-type: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        border: 0;
        color: inherit;
        background-color: inherit;
        font-size: inherit;
        font-weight: inherit;
    }
`;

export default GlobalStyle;
