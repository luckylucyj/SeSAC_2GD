import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Ansungtangmyun-Bold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/Ansungtangmyun-Bold.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ansungtangmyun-Bold';

}
a{
  text-decoration: none;
}
ul,ol{
  list-style: none;
}
`;

export default GlobalStyle;
//const GlobalStyle=`createGlobalStyle`했더니 자동완성으로 import가 뜸, 신기-pm 2:13
//전역적으로 스타일 지정할 수 있음-pm 2:!6
