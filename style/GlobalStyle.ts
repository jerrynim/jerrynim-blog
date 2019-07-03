import reset from "styled-reset";
import { createGlobalStyle } from "./typed-components";

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
    }
    body{

    }
    button{
        padding: 0;
        outline:0;
        cursor:pointer;
        border: 0;
        background-color:white;
    }
`;

export default GlobalStyles;
