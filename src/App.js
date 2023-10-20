import './App.css';
import React from 'react';
// import CardList from './component/card/CardList';
// import { GlobalStyles } from './GlobalStyle';
// import Card2 from './component/card/Card2';
// import { ThemeProvider } from "styled-components";
import Photos from './component/photo/Photos';
  
// const theme = {
//   colors:{
//     blue: "#2979ff",
//   },
// };

function App() {
  return ( 
    // <ThemeProvider theme={theme}>
    // <GlobalStyles></GlobalStyles>  
    //    <CardList>
    //     <Card2></Card2>
    //    </CardList>
    // </ThemeProvider>
    <Photos></Photos>
  );
}
export default App;
