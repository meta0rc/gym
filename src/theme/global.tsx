import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family: Roboto;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }
    h1 {
        font-size: 4rem;
        font-weight: bold;
    }
    h2 { 
        font-size: 3rem;
    }
`;
