import { createGlobalStyle } from "styled-components";
import { colorThemes } from "./ColorStyles";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');


*,*::after, *::before{

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
}
html{
    font-family: 'Inter', sans-serif;
}
body{
    overflow-x: hidden;
    height: 100%;
    width: 100%;
background: ${colorThemes.smoke};
font-family: 'Inter', sans-serif;
}
`