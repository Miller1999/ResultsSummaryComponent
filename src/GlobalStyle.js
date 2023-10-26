import { createGlobalStyle } from "styled-components";
import hanken from "./assets/fonts/HankenGrotesk-VariableFont_wght.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Hanken';
    src: local('Font'), url(${hanken}) format('truetype');
  }
*{
  box-sizing: border-box;
  
}
body{
  background-color: ${(props) => (props.whiteColor ? "white" : "black")};
  height: 100vh;
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
}
h1,p,span{
  font-family:"Hanken";
}
h1{
  font-weight:900;
  font-size:1.5rem;
}
p{
  font-weight:900;
}
span{
  font-weight:900;
  color:gray
}
strong{
  color:hsl(224, 30%, 27%)
}

`;

export default GlobalStyle;
