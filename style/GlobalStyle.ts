import reset from "styled-reset";
import { createGlobalStyle } from "./typed-components";

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
    }
    body{
        @font-face { font-family: 'KOMACON'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.2/KOMACON.woff') format('woff'); font-weight: normal; font-style: normal; }
                      font-family:'KOMACON';
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
    }
    a{
        color: inherit;
    text-decoration: none;
    }
    
    .title{
        margin-bottom:18px;
        font-weight: 500;
        font-size: 28px;
        line-height: 33px;
        color: #333333;
        word-break: break-word;
    }
    .text{
        margin-bottom:18px;
        font-size: 17px;
        line-height: 22px;
        color: #757575;
        word-break: break-word;
    }

    .imgbox{
        text-align:center;
        margin-bottom:14px;
    }
    .img{
        width:430px;
        height:320px;
        display: block;
  margin-left: auto;
  margin-right: auto;
    }

    .line {
        height: 2px;
    background-color: #777777;
    border-radius: 4px;
    margin :18px 0px;
    }
    .bold {
        color:#2F80ED;
    }
`;

export default GlobalStyles;
