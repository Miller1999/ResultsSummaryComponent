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
  height: 100vh;
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  @media (max-width:425px){
    align-items:normal;
    justify-content:normal;
  }
}
h1,h2,h3,h4,p,span,button{
  font-family:"Hanken";
}
h1{
  font-weight:900;
  font-size:1.5rem;
}
h2{
  font-weight:800;
  font-size:1.5rem;
  color:hsl(241, 100%, 89%);
}
h3{
    font-weight:800;
  font-size:2rem;
  color:white;
}
h4{
  font-weight:800;
  font-size:5rem;
  @media (max-width:425px){
font-size:2.5rem;
  }
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
