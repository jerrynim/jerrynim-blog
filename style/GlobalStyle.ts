import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ${reset};
    html{
        scroll-behavior:smooth;
    }
    *{
        box-sizing:border-box;
    }
    body{
                      ::-webkit-scrollbar {
                          display: none;
                          }
    }
    button{
        padding: 0;
        outline:0;
        cursor:pointer;
        border: 0;
        background-color:white;
    }
    h1,h2,h3,h4,h5,h6{
        @font-face { font-family: 'Handon3gyeopsal300g'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.2/Handon3gyeopsal300g.woff') format('woff'); font-weight: normal; font-style: normal; }        font-family: "Handon3gyeopsal300g";
        font-family:"Handon3gyeopsal300g";
    }
    a,p,span,b,div{
        text-decoration:none;
    }
`;

export default GlobalStyles;
